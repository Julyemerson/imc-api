import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  const PrismaCodeErrors = {
    P2002: new UniqueConstraintError(e),
  };

  return PrismaCodeErrors[e.code];
};
