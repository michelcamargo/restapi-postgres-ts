import {
  getAllCustomers,
  getCustomerById,
  registerCustomer, removeCustomer,
  updateCustomer
} from "../controllers/customer/customer.controller";

const customerRoutes = (router: any) => {
  router.get('/api/customers', getAllCustomers);
  router.get('/api/customers/:id', getCustomerById);
  router.post('/api/customers', registerCustomer);
  router.put('/api/customers/:id', updateCustomer);
  router.delete('/api/customers/:id', removeCustomer);
}

export default customerRoutes;
