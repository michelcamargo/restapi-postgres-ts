import { Router } from 'express';
const router = Router();

import { getUsers, getUserById, updateUser, removeUser, registerUser } from '../controllers/user/user.controller';
import { getCustomerById, updateCustomer, removeCustomer, registerCustomer, getAllCustomers } from '../controllers/customer/customer.controller';

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users', registerUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', removeUser);

router.get('/api/customers', getAllCustomers);
router.get('/api/customers/:id', getCustomerById);
router.post('/api/customers', registerCustomer);
router.put('/api/customers/:id', updateCustomer);
router.delete('/api/customers/:id', removeCustomer);


export default router;