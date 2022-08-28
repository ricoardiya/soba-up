/*
  Warnings:

  - You are about to drop the column `contact` on the `EmergencyContact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNum]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNum` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNum` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "EmergencyContact" DROP COLUMN "contact",
ADD COLUMN     "phoneNum" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phoneNum" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNum_key" ON "User"("phoneNum");
