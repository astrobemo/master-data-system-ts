/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subitem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subitem" DROP CONSTRAINT "Subitem_itemId_fkey";

-- DropTable
DROP TABLE "Item";

-- DropTable
DROP TABLE "Subitem";

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "skuCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" "Unit" NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subitem" (
    "id" SERIAL NOT NULL,
    "skuCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" "Unit" NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "subitem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "item_skuCode_key" ON "item"("skuCode");

-- CreateIndex
CREATE UNIQUE INDEX "subitem_skuCode_key" ON "subitem"("skuCode");

-- AddForeignKey
ALTER TABLE "subitem" ADD CONSTRAINT "subitem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
