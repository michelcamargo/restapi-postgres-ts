import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { dbPool } from '../../database';

export const getContentByGroupName = async (req: Request, res: Response): Promise<Response> => {
  try {
    const query = 'SELECT * FROM content WHERE GROUP_NAME = $1';
    const groupName = req.params.groupName.toString();
    const response: QueryResult = await dbPool.query(query, [groupName]);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const getContentByTitle = async (req: Request, res: Response): Promise<Response> => {
  try {
    const query = 'SELECT * FROM content WHERE TITLE = $1';
    const title = req.params.title.toString();
    const response: QueryResult = await dbPool.query(query, [title]);
    return res.status(200).json(response.rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
}
