import { Injectable } from '@nestjs/common';
import { CreateHealthInformationDto } from './dto/create-health-information.dto';

@Injectable()
export class HealthInformationsService {
  create(createHealthInformationDto: CreateHealthInformationDto) {
    return 'This action adds a new healthInformation';
  }

  findAll() {
    return `This action returns all healthInformations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthInformation`;
  }
}
