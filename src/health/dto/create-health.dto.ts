import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHealthDto {
  @IsNotEmpty()
  weight: number;

  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  @IsEmail()
  userEmail: string;
}
