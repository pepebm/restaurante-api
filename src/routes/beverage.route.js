import express from 'express';
import { 
  createBeverage, 
  showBeverage, 
  updateBeverage,
  deleteBeverage
} from '../controllers/beverage.controller';

const router = express.Router();

router.post('/new', createBeverage);
router.get('/:id', showBeverage);
router.put('/:id/update', updateBeverage);
router.delete('/:id/delete', deleteBeverage);

export default router;