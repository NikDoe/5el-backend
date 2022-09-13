import {Router} from 'express';

const router = Router();

router.get('/train', (req, res) => {
	res.send('роут с поездами');
})

export default router;