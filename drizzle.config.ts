import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './db-schemas/*-schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.VITE_TURSO_DATABASE_URL as string,
    authToken: process.env.VITE_TURSO_AUTH_TOKEN as string,
  },
});