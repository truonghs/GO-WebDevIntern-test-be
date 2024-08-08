import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('current')
  async getCurrent(@Query('city') city: string) {
    return this.weatherService.getCurrent(city);
  }
  @Get('forecast')
  async getForecast(@Query('city') city: string) {
    return this.weatherService.getForecast(city);
  }
}
