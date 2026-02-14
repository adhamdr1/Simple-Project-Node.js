// index.js
const db = require('./db');

async function testConnection() {
  try {
    // دي جملة SQL بسيطة بترجع الوقت الحالي
    const res = await db.query('SELECT NOW()');
    console.log('✅ Connection Successful!');
    console.log('Database Time:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Connection Failed:', err.message);
  }
}

testConnection();