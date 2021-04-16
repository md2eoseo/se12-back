/*
  Warnings:

  - Made the column `endDate` on table `Banner` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Banner" ALTER COLUMN "endDate" SET NOT NULL;
