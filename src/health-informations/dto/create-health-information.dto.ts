import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateHealthInformationDto {
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsOptional()
  user: string;

  @IsOptional()
  imc: number;
}
