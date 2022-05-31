import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthInformationDto } from './create-health-information.dto';

export class UpdateHealthInformationDto extends PartialType(CreateHealthInformationDto) {}
