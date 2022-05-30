import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.repository.create(createUserDto);
    return user;
  }

  async findOne(id: number) {
    const user = await this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário Não encontrado');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.repository.update(id, updateUserDto);

    return updateUser;
  }
}
