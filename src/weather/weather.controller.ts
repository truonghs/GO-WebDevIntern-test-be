import {
  Controller,
  Get,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  async getCurrent(@Query('city') city: string) {
    try {
      const result = this.weatherService.getCurrent(city);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid location!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Get('forecast')
  async getForecast(@Query('city') city: string) {
    try {
      const result = this.weatherService.getForecast(city);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid location!',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
