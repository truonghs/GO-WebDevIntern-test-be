import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionSchema } from 'src/subscription/subscription.schema';
import { EmailModule } from 'src/email/email.module';
import { JwtConfigModule } from 'src/jwt/jwt.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Subscription', schema: SubscriptionSchema },
    ]),
    EmailModule,
    JwtConfigModule,
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
