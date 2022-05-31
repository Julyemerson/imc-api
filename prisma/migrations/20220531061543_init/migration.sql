/*
  Warnings:

  - You are about to drop the column `height` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `imc` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "imc" DROP CONSTRAINT "imc_userId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "height",
DROP COLUMN "weight";

-- DropTable
DROP TABLE "imc";

-- CreateTable
CREATE TABLE "healthData" (
    "id" SERIAL NOT NULL,
    "imc" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "healthData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "healthData" ADD CONSTRAINT "healthData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
