import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { HealthRepository } from './repositories/health.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService, HealthRepository, PrismaService],
})
export class HealthModule {}
