import { Router } from 'express';
import bookingRouter from './bookingRouter.js';
import trainRouter from './trainRouter.js';

const router = Router();

router.use('/', trainRouter);
router.use('/', bookingRouter);

export default router;
