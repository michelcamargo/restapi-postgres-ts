import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { pool } from '../../database';

export const getAllExperience = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM portfolio');
        // console.log("[getAllCustomers]", response.rows);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error
        });
    }
};
