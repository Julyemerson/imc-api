import { Module } from '@nestjs/common';
import { HealthInformationsService } from './health-informations.service';
import { HealthInformationsController } from './health-informations.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthInformationRepository } from './repositories/health-information.repository';

@Module({
  controllers: [HealthInformationsController],
  providers: [
    HealthInformationsService,
    PrismaService,
    HealthInformationRepository,
  ],
})
export class HealthInformationsModule {}
