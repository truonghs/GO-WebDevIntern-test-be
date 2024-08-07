import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from './subscription.schema';
import { CreateSubscriptionDto, UnsubscribeDto } from './subscription.dto';
import { EmailService } from '../email/email.service';
import { ServiceJWT } from 'src/jwt/jwt.service';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel('Subscription')
    private readonly subscriptionModel: Model<Subscription>,
    private emailService: EmailService,
    private jwtService: ServiceJWT,
  ) {}

  async createSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    const confirmationToken = await this.jwtService.createConfirmationToken(
      createSubscriptionDto.email,
    );
    const createdSubscription = new this.subscriptionModel({
      ...createSubscriptionDto,
      confirmationToken,
    });

    await this.emailService.sendConfirmationEmail(
      createSubscriptionDto.email,
      confirmationToken,
    );
    return createdSubscription.save();
  }

  async confirmSubscription(
    token: string,
    email: string,
  ): Promise<Subscription> {
    const subscription = await this.subscriptionModel.findOne({ email });
    if (!subscription || subscription.confirmationToken !== token) {
      throw new Error('Invalid confirmation token');
    }

    subscription.confirmed = true;
    token = await this.jwtService.createConfirmationToken(email);
    subscription.confirmationToken = token;
    await this.emailService.sendSuccessEmail(email, token);
    return subscription.save();
  }

  async unsubscribe(unsubscribeDto: UnsubscribeDto): Promise<void> {
    const subscription = await this.subscriptionModel.findOne({
      email: unsubscribeDto.email,
    });
    if (
      !subscription ||
      subscription.confirmationToken !== unsubscribeDto.token
    ) {
      throw new Error('Invalid email or token');
    }
    await this.subscriptionModel.deleteOne({ email: unsubscribeDto.email });
  }
  async getSubscribers(): Promise<Subscription[]> {
    const subscriptions = await this.subscriptionModel.find();
    return subscriptions;
  }
}
