/*
  Warnings:

  - You are about to drop the column `carId` on the `Iklan` table. All the data in the column will be lost.
  - Added the required column `IklanId` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Iklan" DROP CONSTRAINT "Iklan_carId_fkey";

-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "IklanId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Iklan" DROP COLUMN "carId";

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_IklanId_fkey" FOREIGN KEY ("IklanId") REFERENCES "Iklan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
