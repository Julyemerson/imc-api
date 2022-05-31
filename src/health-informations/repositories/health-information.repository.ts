import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHealthInformationDto } from '../dto/create-health-information.dto';

export class HealthInformationRepository {
  constructor(private readonly prisma: PrismaService) {}

  // async create(createHealthInformationDto: CreateHealthInformationDto) {
  //   const healthInformation = await this.prisma.healthData.create({
  //    data: createHealthInformationDto,
  // });

  //return healthInformation;
  //}

  async create(createHealthInformationDto: CreateHealthInformationDto) {
    const userData = await this.prisma.healthData.create({
      data: createHealthInformationDto,
    });

    return userData;
  }
}
