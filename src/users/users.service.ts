import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    const user = this.repository.create(createUserDto);
    return user;
  }

  findMany(email?: string) {
    const users = this.repository.findMany(email);
    return users;
  }

  findOne(id: number) {
    const user = this.repository.findOne(id);

    if (!user) {
      throw new NotFoundException('Usuário Não encontrado');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = this.repository.update(id, updateUserDto);

    return updateUser;
  }

  remove(id) {
    const removedUser = this.repository.remove(id);
    return removedUser;
  }
}
