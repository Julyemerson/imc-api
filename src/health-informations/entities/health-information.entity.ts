import { HealthData } from '@prisma/client';

export class HealthInformationEntity implements HealthData {
  id: number;
  imc: number;
  height: number;
  weight: number;
  createdAt: Date;
  userId: number;
}
