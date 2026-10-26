require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/eventRoutes'));
app.use('/api', require('./routes/marketRoutes'));

app.listen(port, () => {
  console.log(`Tremor backend listening at http://localhost:${port}`);
});

module.exports = { pool };
