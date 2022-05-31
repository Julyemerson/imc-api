import { Injectable, NotFoundException } from '@nestjs/common';
import { handleImcRate } from 'src/common/utils/handleImcRate';
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

  async findMany() {
    const users = await this.prisma.user.findMany();
    return users;
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

  async getImc(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
