import { config } from 'dotenv';
config();
export const REDIS_URL: string = String(process.env.REDIS_URL);
export const DATABASE_URL: string = String(process.env.DATABASE_URL);
