import { Pool } from 'pg';

export const dbPool = new Pool({
    host: process.env['PG_URL'],
    user: process.env['PG_USER'],
    password: process.env['PG_SECRET_KEY'],
    database: process.env['PG_DB_NAME'],
    ssl: true,
    min: 0,
    max: 5,
    port: 5432,
    // options: 'client_encoding: utf8'
    // client_encoding: 'utf8'
});
