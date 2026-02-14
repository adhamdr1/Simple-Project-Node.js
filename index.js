// // index.js
// const db = require('./db');

// async function testConnection() {
//   try {
//     // دي جملة SQL بسيطة بترجع الوقت الحالي
//     const res = await db.query('SELECT NOW()');
//     console.log('✅ Connection Successful!');
//     console.log('Database Time:', res.rows[0].now);
//   } catch (err) {
//     console.error('❌ Connection Failed:', err.message);
//   }
// }

// testConnection();

const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes'); 

app.use(express.json());

app.use('/api/employees', employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


