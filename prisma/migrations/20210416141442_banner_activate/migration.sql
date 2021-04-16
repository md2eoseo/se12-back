/*
  Warnings:

  - You are about to drop the column `banner` on the `Banner` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "banner",
ADD COLUMN     "imgUrl" TEXT,
ADD COLUMN     "activate" BOOLEAN NOT NULL DEFAULT false;
