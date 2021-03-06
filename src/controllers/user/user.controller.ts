import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { dbPool } from '../../database';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await dbPool.query('SELECT * FROM users');
    // console.log("[getUsers]", response.rows);
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
    const query = 'SELECT * FROM users WHERE id = $1';
    const id = parseInt(req.params.id);
    const response: QueryResult = await dbPool.query(query, [id]);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { alias, firstName, lastName, email, secret} = req.body;
    const query = 'INSERT INTO users (U_ALIAS, U_FIRST_NAME, U_LAST_NAME, U_EMAIL, U_SECRET) VALUES ($1, $2, $3, $4, $5)';

    // checkIfUserExists(email) && console.log("[createUser]", "Usuário existente.");

    const response: QueryResult = await dbPool.query(query, [alias, firstName, lastName, email, secret]);
    return res.status(201).json({
      message: '[Users] Usuário criado.',
      body: {
        user: {
          alias,
          firstName,
          lastName,
          email,
          secret
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

    const response: QueryResult = await dbPool.query(query, [name, email, id]);
    return res.status(200).json({
      message: `[Users] Usuário ${name} atualizado.`,
      body: {
        user: {
          name,
          email
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const removeUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM users WHERE id = $1';

    const response: QueryResult = await dbPool.query(query, [id]);
    return res.status(200).json({
      message:`[Users] Usuário ${id} removido.`
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};
