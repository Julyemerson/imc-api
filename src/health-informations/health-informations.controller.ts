import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HealthInformationsService } from './health-informations.service';
import { CreateHealthInformationDto } from './dto/create-health-information.dto';

@Controller('health-informations')
export class HealthInformationsController {
  constructor(
    private readonly healthInformationsService: HealthInformationsService,
  ) {}

  @Post()
  create(@Body() createHealthInformationDto: CreateHealthInformationDto) {
    return this.healthInformationsService.create(createHealthInformationDto);
  }

  @Get()
  findAll() {
    return this.healthInformationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthInformationsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthInformationsService.remove(+id);
  }
}
