// db.js
require('dotenv').config(); // عشان نقرأ البيانات من ملف .env
const { Pool } = require('pg');

// إعداد الاتصال
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// جملة بسيطة عشان نتأكد أول ما الملف يشتغل
console.log("Attempting to connect to database...");

// دالة عشان نجرب الاتصال
// الميزة هنا إننا بنستخدم query مباشرة وده بيسهل علينا الشغل بعدين
module.exports = {
  query: (text, params) => pool.query(text, params),
};