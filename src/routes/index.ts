import { Router } from 'express';
const router = Router();

import {getUsers, createUser, getUserById, updateUser, removeUser} from '../controllers/index.controller';

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUserById);
router.post('/api/users', createUser);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', removeUser);

export default router;