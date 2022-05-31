/*
  Warnings:

  - You are about to drop the column `height` on the `imc` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `imc` table. All the data in the column will be lost.
  - Added the required column `imc` to the `imc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "imc" DROP COLUMN "height",
DROP COLUMN "weight",
ADD COLUMN     "imc" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
