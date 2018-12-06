import express from 'express';
import { 
  test, 
  createBeverage, 
  showBeverage, 
  updateBeverage,
  deleteBeverage
} from '../controllers/beverage.controller';

const router = express.Router();

router.get('/test', test);
router.post('/new', createBeverage);
router.get('/:id', showBeverage);
router.put('/:id/update', updateBeverage);
router.delete('/:id/delete', deleteBeverage);

export default router;