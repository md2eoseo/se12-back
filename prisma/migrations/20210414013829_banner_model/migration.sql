-- CreateEnum
CREATE TYPE "BannerCategory" AS ENUM ('ANNOUNCEMENT', 'EVENT');

-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "category" "BannerCategory" NOT NULL,
    "banner" TEXT,
    "title" TEXT NOT NULL,
    "contents" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
