import { Router } from 'express';

const bookingRouter = Router();

bookingRouter.get('/booking', (req, res) => {
	res.send('все брони получены');
});

bookingRouter.post('/booking', (req, res) => {
	res.send('создана новая бронь');
});

export default bookingRouter;
