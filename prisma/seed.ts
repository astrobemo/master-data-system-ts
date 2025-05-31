import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Optional: Clear tables for idempotency
  await prisma.subitem.deleteMany();
  await prisma.item.deleteMany();

  // Create items and capture their IDs
  const item1 = await prisma.item.create({
    data: {
      skuCode: 'ITEM001',
      name: 'Item One',
      unit: 'PCS',
      description: 'Description for Item One',
      price: 100.0,
    },
  });
  const item2 = await prisma.item.create({
    data: {
      skuCode: 'ITEM002',
      name: 'Item Two',
      unit: 'KG',
      description: 'Description for Item Two',
      price: 200.0,
    },
  });

  // Create subitems using the actual item IDs
  await prisma.subitem.createMany({
    data: [
      {
        itemId: item1.id,
        skuCode: 'SUBITEM001',
        name: 'Subitem One',
        unit: 'LITER',
        description: 'Description for Subitem One',
        price: 50.0,
      },
      {
        itemId: item2.id,
        skuCode: 'SUBITEM002',
        name: 'Subitem Two',
        unit: 'BOX',
        description: 'Description for Subitem Two',
        price: 75.0,
      },
    ],
  });
}

main()
  .then(async () => {
    console.log('Database seeded successfully.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error during seeding:', e);
    await prisma.$disconnect();
    process.exit(1);
  });