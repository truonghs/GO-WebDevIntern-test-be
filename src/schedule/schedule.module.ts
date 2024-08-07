import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { SubscriptionModule } from 'src/subscription/subscription.module';
import { ScheduleController } from 'src/schedule/schedule.controller';
import { EmailModule } from 'src/email/email.module';
import { JwtConfigModule } from 'src/jwt/jwt.module';

@Module({
  imports: [SubscriptionModule, EmailModule, JwtConfigModule],
  providers: [ScheduleService],
  controllers: [ScheduleController],
  exports: [ScheduleService],
})
export class ScheduleModule {}
