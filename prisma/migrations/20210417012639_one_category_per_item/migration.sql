/*
  Warnings:

  - You are about to drop the `_CategoryToItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToItem" DROP CONSTRAINT "_CategoryToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToItem" DROP CONSTRAINT "_CategoryToItem_B_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_CategoryToItem";

-- AddForeignKey
ALTER TABLE "Item" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
