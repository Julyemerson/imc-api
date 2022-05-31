import { PrismaClientError } from '../errors/types/PrismaClientError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  const PrismaCodeErrors = {
    P2002: new UniqueConstraintError(e),
  };

  return PrismaCodeErrors[e.code];
};
