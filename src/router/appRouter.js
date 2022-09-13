import {Router} from 'express';
import trainRouter from "./trainRouter.js";

const router = Router();

router.use('/', trainRouter);

export default router;