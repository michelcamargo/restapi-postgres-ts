import { Pool } from 'pg';

export const dbPool = new Pool({
    host: process.env['DATABASE_URL'],
    user: process.env['DATABASE_USER'],
    password: process.env['DATABASE_SECRET_KEY'],
    database: process.env['DATABASE_NAME'],
    ssl: true,
    min: 0,
    max: 5,
    port: 5432,
    // options: 'client_encoding: utf8'
    // client_encoding: 'utf8'
});
