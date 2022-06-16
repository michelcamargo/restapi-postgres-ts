import {Request, Response} from 'express';
import {QueryResult} from 'pg';

import { dbPool } from '../../database';

export const getAllCustomers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await dbPool.query('SELECT * FROM customers');
    // console.log("[getAllCustomers]", response.rows);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};

export const getCustomerById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const query = 'SELECT * FROM customers WHERE id = $1';
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

export const registerCustomer = async (req: Request, res: Response): Promise<Response> => {
  console.log("[registerCustomer] executed");
  try {
    const { name, email } = req.body;
    const query = 'INSERT INTO customers (name, email) VALUES ($1, $2)';

    // checkIfCustomerExists(email) && console.log("[createCustomer]", "Usuário existente.");

    const response: QueryResult = await dbPool.query(query, [name, email]);
    return res.status(201).json({
      message: '[Customers] Cliente criado.',
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

export const updateCustomer = async (req: Request, res: Response): Promise<Response> => {
  console.log("[updateCustomer] executed");
  try {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const query = 'UPDATE customers SET name = $1, email = $2 WHERE id = $3';

    const response: QueryResult = await dbPool.query(query, [name, email, id]);
    return res.status(200).json({
      message: `[Customers] Cliente ${name} atualizado.`,
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

export const removeCustomer = async (req: Request, res: Response): Promise<Response> => {
  console.log("[removeCustomer] executed");
  try {
    const id = parseInt(req.params.id);
    const query = 'DELETE FROM customers WHERE id = $1';

    const response: QueryResult = await dbPool.query(query, [id]);
    return res.status(200).json({
      message:`[Customers] Cliente ${id} removido.`
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      error
    });
  }
};
