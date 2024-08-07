import { Expose, Type } from 'class-transformer';

export class ConditionDto {
  @Expose()
  text: string;

  @Expose()
  icon: string;
}

export class CurrentWeatherDto {
  @Expose()
  temp_c: number;

  @Expose()
  @Type(() => ConditionDto)
  condition: ConditionDto;

  @Expose()
  wind_kph: number;

  @Expose()
  humidity: number;

  @Expose()
  last_updated: string;
}

export class LocationDto {
  @Expose()
  name: string;

  @Expose()
  country: string;

  @Expose()
  localtime: string;
}

export class DayForecastDto {
  @Expose()
  maxtemp_c: number;

  @Expose()
  avgtemp_c: number;

  @Expose()
  maxwind_kph: number;

  @Expose()
  avghumidity: number;

  @Expose()
  @Type(() => ConditionDto)
  condition: ConditionDto;
}

export class ForecastDayDto {
  @Expose()
  date: string;

  @Expose()
  @Type(() => DayForecastDto)
  day: DayForecastDto;
}

export class ForecastDto {
  @Expose()
  @Type(() => ForecastDayDto)
  forecastday: ForecastDayDto[];
}

export class WeatherDto {
  @Expose()
  @Type(() => LocationDto)
  location: LocationDto;

  @Expose()
  @Type(() => CurrentWeatherDto)
  current: CurrentWeatherDto;

  @Expose()
  @Type(() => ForecastDto)
  forecast: ForecastDto;
}
