import {
  Controller,
  Post,
  Body,
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
    try {
      const result = this.subscriptionService.createSubscription(
        createSubscriptionDto,
      );
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid Email!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
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
  @Post('unsubscribe-request')
  async unsubscribeRequest(@Body('email') email: string) {
    try {
      const result = await this.subscriptionService.unsubscribeRequest(email);
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
