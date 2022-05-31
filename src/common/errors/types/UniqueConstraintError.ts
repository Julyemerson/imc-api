import { ConflictException } from '@nestjs/common';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictException {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A record with this ${uniqueField} already exists`);
  }
}
