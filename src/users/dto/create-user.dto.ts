import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email para cadastro do Usuário' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Nome para cadastro do Usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
