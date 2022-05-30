import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findOne(id: number) {
    const user = this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userId = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userId) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const updateUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return updateUser;
  }
}
