import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  findAll() {
    return this.healthService.findAll();
  }

  @ApiNotFoundResponse({ description: 'Não encontrado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthService.remove(+id);
  }
}
