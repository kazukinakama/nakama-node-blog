import mysql, { Pool } from 'mysql2/promise';

export const pool: Pool = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'nakama-node-blog',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
