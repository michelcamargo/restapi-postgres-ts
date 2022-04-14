import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { pool } from '../database';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM users');
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};
