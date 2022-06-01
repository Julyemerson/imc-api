import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHealthDto {
  @ApiProperty({ description: 'Peso do Usuário' })
  @IsNotEmpty()
  weight: number;

  @ApiProperty({ description: 'Altura do Usuário' })
  @IsNotEmpty()
  height: number;

  @ApiProperty({ description: 'Email do usuário previamente cadastrado' })
  @IsNotEmpty()
  @IsEmail()
  userEmail: string;
}
