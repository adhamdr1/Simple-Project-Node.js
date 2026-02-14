// db.js
import dotenv from 'dotenv';
import pg from 'pg'; 

const { Pool } = pg;
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log("Attempting to connect to database...");

// ⚠️ التغيير المهم هنا:
// بدل module.exports = ...
// هنستخدم export const عشان نقدر نعملها import { query } هناك
export const query = (text, params) => pool.query(text, params);
