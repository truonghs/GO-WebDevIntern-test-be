import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSubscriptionDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  coordinate: string;
}

export class UnsubscribeDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  token: string;
}
