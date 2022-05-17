import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { pool } from '../../database';

export const getLinksByGroupName = async (req: Request, res: Response): Promise<Response> => {
  try {
    const query = 'SELECT * FROM content WHERE group_name = $1';
    const groupName = req.params.groupName.toString();
    const response: QueryResult = await pool.query(query, [groupName]);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};
