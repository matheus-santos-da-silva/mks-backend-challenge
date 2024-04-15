import { config } from 'dotenv';
config();
export const PORT: number = parseInt(process.env.PORT) || 3000;
export const DB_USERNAME: string = String(process.env.DB_USERNAME);
export const DB_PASSWORD: string = String(process.env.DB_PASSWORD);
export const DB: string = String(process.env.DB);
