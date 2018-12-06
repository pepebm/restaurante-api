import express from 'express';

import { 
  createEmployee, 
  loginEmployee,
  updateEmployee,
  showEmployee,
  deleteEmployee
} from "../controllers/employee.controller";

const router = express.Router();

router.post('/new', createEmployee);
router.post('/login', loginEmployee);
router.get('/:id', showEmployee);
router.put('/:id/update', updateEmployee);
router.delete('/delete', deleteEmployee);

export default router;