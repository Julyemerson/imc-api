import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { handleImcRate } from 'src/common/utils/handleImcRate';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHealthDto } from '../dto/create-health.dto';
import { HealthEntity } from '../entities/health.entity';

@Injectable()
export class HealthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHealthDto: CreateHealthDto) {
    const { userEmail, height, weight } = createHealthDto;

    delete createHealthDto.userEmail;

    const user = await this.prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const data: Prisma.HealthCreateInput = {
      height,
      weight,
      user: {
        connect: {
          email: userEmail,
        },
      },
      imc: handleImcRate(height, weight),
    };

    const healthData = await this.prisma.health.create({
      data,
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return healthData;
  }

  async findAll(): Promise<HealthEntity[]> {
    return this.prisma.health.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    const healthData = await this.prisma.health.findUnique({
      where: {
        id,
      },
    });

    if (!healthData) {
      throw new NotFoundException('Dados não encontrados');
    }

    return await this.prisma.health.delete({
      where: {
        id,
      },
    });
  }
}
