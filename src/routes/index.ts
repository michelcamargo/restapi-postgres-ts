import { Router } from 'express';
const router = Router();

import {getUsers, createUser, getUserById, updateUser, removeUser} from '../controllers/index.controller';

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', removeUser);

export default router;