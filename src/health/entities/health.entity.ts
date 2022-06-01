import { Health } from '@prisma/client';

export class HealthEntity implements Health {
  id: number;
  weight: number;
  height: number;
  imc: string;
  createdAt: Date;
  userId: number;
}
