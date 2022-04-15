import { Pool } from 'pg';

export const pool = new Pool({
    user: 'mscamargo',
    host: 'localhost',
    database: 'camargo-db',
    password: '2705',
    port: 5432
});