import type { Config } from "drizzle-kit";
import "dotenv/config";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

export default {
  schema: "./lib/db.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  }
} satisfies Config;

// Extract database credentials from DATABASE_URL if available
const dbConfig = process.env.DATABASE_URL 
  ? parseDatabaseUrl(process.env.DATABASE_URL)
  : null;

// Fallback to individual environment variables if DATABASE_URL parsing failed
if (!dbConfig && !(process.env.PGHOST && process.env.PGUSER && process.env.PGDATABASE && process.env.PGPASSWORD)) {
  throw new Error("No database credentials found in environment variables. Please add them to your .env file.");
}

// Configuration for drizzle-kit
export default {
  schema: "./lib/db.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: dbConfig || {
    host: process.env.PGHOST! ,
    user: process.env.PGUSER! ,
    password: process.env.PGPASSWORD! ,
    database: process.env.PGDATABASE! ,
    ssl: "require" as const,
  },
  verbose: true,
} satisfies Config
