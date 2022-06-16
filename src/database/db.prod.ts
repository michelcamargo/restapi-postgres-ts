import { Pool } from 'pg';

export const dbPool = new Pool({
    host: 'ec2-3-228-235-79.compute-1.amazonaws.com',
    user: 'yodzatxvqhkkvh',
    password: '9500761c35812e934409245af5a87f7fea40a00172ddfdfd6d0a8a709384382b',
    database: 'dfirqp5lppbubf',
    ssl: true,
    min: 0,
    max: 5,
    port: 5432,
    // options: 'client_encoding: utf8'
    // client_encoding: 'utf8'
});
