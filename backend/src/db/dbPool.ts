import { configDotenv } from "dotenv";
import { Pool } from "pg";

configDotenv();

const connectionPool = new Pool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  port: parseInt(process.env.DB_PORT!),
  connectionTimeoutMillis: 10000,
  max: 10
});

export default connectionPool;
