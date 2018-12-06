import express from 'express';

import { 
  createUser, 
  loginUser,
  updateUser,
  showUser
} from "../controllers/user.controller";

const router = express.Router();

router.post('/new', createUser);
router.post('/login', loginUser);
router.get('/:id', showUser);
router.put('/:id/update', updateUser);

export default router;