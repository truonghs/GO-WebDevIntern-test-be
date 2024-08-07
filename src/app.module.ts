import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { EmailModule } from './email/email.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigModule } from './jwt/jwt.module';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    WeatherModule,
    EmailModule,
    SubscriptionModule,
    JwtConfigModule,
    ScheduleModule,
  ],

  controllers: [AppController, ScheduleController],
  providers: [AppService],
})
export class AppModule {}
