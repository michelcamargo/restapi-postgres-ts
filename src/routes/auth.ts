import {getUserById, getUsers, registerUser, removeUser, updateUser} from "../controllers/user/user.controller";

const authRoutes = (router: any) => {
  router.get('/api/users', getUsers);
  router.get('/api/users/:id', getUserById);
  router.post('/api/users', registerUser);
  router.put('/api/users/:id', updateUser);
  router.delete('/api/users/:id', removeUser);
}

export default authRoutes;