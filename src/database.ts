import { Pool } from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mainapi',
    password: 'orangeBOX=2705',
    port: 5432
});