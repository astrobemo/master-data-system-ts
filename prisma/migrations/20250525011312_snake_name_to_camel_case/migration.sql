/*
  Warnings:

  - The values [PIECE,KILOGRAM,METER] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `sku_code` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `sku_code` on the `Subitem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[skuCode]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skuCode]` on the table `Subitem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `skuCode` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skuCode` to the `Subitem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('PCS', 'KG', 'YARD', 'LITER', 'BOX');
ALTER TABLE "Item" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TABLE "Subitem" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "Unit_old";
COMMIT;

-- DropIndex
DROP INDEX "Item_sku_code_key";

-- DropIndex
DROP INDEX "Subitem_sku_code_key";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "sku_code",
ADD COLUMN     "skuCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subitem" DROP COLUMN "sku_code",
ADD COLUMN     "skuCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Item_skuCode_key" ON "Item"("skuCode");

-- CreateIndex
CREATE UNIQUE INDEX "Subitem_skuCode_key" ON "Subitem"("skuCode");
