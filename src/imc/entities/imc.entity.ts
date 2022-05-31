import { Imc } from '@prisma/client';

export class ImcEntity implements Imc {
  id: number;
  imc: number;
  createdAt: Date;
  userId: number;
}
