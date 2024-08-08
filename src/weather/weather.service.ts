import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { WeatherDto } from 'src/weather/weather.dto';
@Injectable()
export class WeatherService {
  private readonly apiKey = process.env.WEATHER_API_KEY;
  private readonly apiUrl = process.env.WEATHER_API_URL;

  constructor() {}

  async getForecast(city: string): Promise<WeatherDto> {
    const url = `${this.apiUrl}/forecast.json?q=${city}&key=${this.apiKey}&days=14`;

    const axiosResponse: AxiosResponse = await axios.get(url);

    return plainToClass(WeatherDto, axiosResponse.data, {
      excludeExtraneousValues: true,
    });
  }
  async getCurrent(city: string): Promise<WeatherDto> {
    const url = `${this.apiUrl}/current.json?q=${city}&key=${this.apiKey}`;

    const axiosResponse: AxiosResponse = await axios.get(url);

    return plainToClass(WeatherDto, axiosResponse.data, {
      excludeExtraneousValues: true,
    });
  }
}
