import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
  height: number;
  weight: number;
  createdAt: Date;
}
