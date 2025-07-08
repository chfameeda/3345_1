const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'testdb',
  port: process.env.DB_PORT || 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ DB Connection Failed:', err.message);
    process.exit(1);
  } else {
    console.log('✅ DB Connected - Server Time:', res.rows[0].now);
    process.exit(0);
  }
});
