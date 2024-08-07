import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { EmailService } from 'src/email/email.service';
import { ServiceJWT } from 'src/jwt/jwt.service';
import { SubscriptionService } from 'src/subscription/subscription.service';
import { WeatherDto } from 'src/weather/weather.dto';
import { dailyEmail } from 'utils/emailTemplates';

@Injectable()
export class ScheduleService {
  constructor(
    private emailService: EmailService,
    private readonly subscriptionService: SubscriptionService,
  ) {}

  private readonly apiKey = 'c49ded753c934e4a89a134310240608';
  private readonly apiUrl = 'http://api.weatherapi.com/v1';
  @Cron(CronExpression.EVERY_DAY_AT_7AM)
  async handleCron() {
    const subscriptions = await this.subscriptionService.getSubscribers();

    for (const subscription of subscriptions) {
      if (subscription.confirmed) {
        const url = `${this.apiUrl}/forecast.json?q=${subscription.coordinate}&key=${this.apiKey}&day=1`;
        const axiosResponse: AxiosResponse = await axios.get(url);

        const weather = plainToClass(WeatherDto, axiosResponse.data, {
          excludeExtraneousValues: true,
        });
        await this.emailService.sendDailyWeatherEmail(
          subscription.email,
          dailyEmail(weather),
        );
      }
    }
  }
}
