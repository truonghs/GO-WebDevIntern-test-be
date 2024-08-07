import {
  Controller,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import {
  CreateSubscriptionDto,
  UnsubscribeDto,
} from 'src/subscription/subscription.dto';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('register')
  async register(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionService.createSubscription(createSubscriptionDto);
  }

  @Post('confirm')
  async confirm(@Body('token') token: string, @Body('email') email: string) {
    try {
      const result = await this.subscriptionService.confirmSubscription(
        token,
        email,
      );
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid or expired token!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('unsubscribe')
  async unsubscribe(@Body() unsubscribeDto: UnsubscribeDto) {
    try {
      const result = await this.subscriptionService.unsubscribe(unsubscribeDto);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid email address!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
