-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('PIECE', 'YARD', 'KILOGRAM', 'LITER', 'METER', 'BOX');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "sku_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "unit" "Unit" NOT NULL,
    "hasSubitem" BOOLEAN NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subitem" (
    "id" SERIAL NOT NULL,
    "sku_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER NOT NULL,

    CONSTRAINT "Subitem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_sku_code_key" ON "Item"("sku_code");

-- CreateIndex
CREATE UNIQUE INDEX "Subitem_sku_code_key" ON "Subitem"("sku_code");

-- AddForeignKey
ALTER TABLE "Subitem" ADD CONSTRAINT "Subitem_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
