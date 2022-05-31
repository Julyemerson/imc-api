import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateImcDto {
  @IsNotEmpty()
  imc: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
