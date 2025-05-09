import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool: Pool | null = null;
 
/**
 * Initializes the pool with the given configuration.
 */
export const setPool = (config?: object): void => {
  pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    ...config, // Allow overriding default config
  });
};

/**
 * Returns the current pool instance.
 */
export const getPool = (): Pool => {
  if (!pool) {
    throw new Error('Database pool has not been initialized. Call setPool() first.');
  }
  return pool;
};