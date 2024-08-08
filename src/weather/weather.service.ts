import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import { WeatherDto } from 'src/weather/weather.dto';
@Injectable()
export class WeatherService {
  private readonly apiKey = 'c49ded753c934e4a89a134310240608';
  private readonly apiUrl = 'http://api.weatherapi.com/v1';

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
