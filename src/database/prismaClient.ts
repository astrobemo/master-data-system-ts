import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const logLevel =
  ENVIRONMENT === 'development'
    ? ['error', 'info', 'warn', 'error']
    : ['error', 'warn', 'error'];

declare global {
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL || process.env.DB_URL;
console.log('Database URL:', databaseUrl);
if (!databaseUrl) {
  throw new Error('DATABASE_URL or DB_URL is not defined in .env file');
}

let prisma: PrismaClient;

if (global.prisma) {
  prisma = global.prisma;
} else {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    errorFormat: 'pretty',
  });
}

const client = prisma;

if (process.env.NODE_ENV !== 'production') {
  global.prisma = client;
}

const gracefulShutdown = async (): Promise<void> => {
  await client.$disconnect();
  log('Prisma Client disconnected');
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('beforeExit', gracefulShutdown);

export { client };
