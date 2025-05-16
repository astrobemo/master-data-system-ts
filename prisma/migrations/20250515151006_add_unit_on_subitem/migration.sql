/*
  Warnings:

  - You are about to drop the column `hasSubitem` on the `Item` table. All the data in the column will be lost.
  - Added the required column `unit` to the `Subitem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "hasSubitem";

-- AlterTable
ALTER TABLE "Subitem" ADD COLUMN     "unit" "Unit" NOT NULL;
