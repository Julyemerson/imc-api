import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { HealthRepository } from './repositories/health.repository';

@Injectable()
export class HealthService {
  constructor(private readonly repository: HealthRepository) {}

  create(createHealthDto: CreateHealthDto) {
    return this.repository.create(createHealthDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
