import { Router } from 'express';
import { exampleController } from '../controller/planets';

const router = Router();

router.get('/example', exampleController);

export default router;
