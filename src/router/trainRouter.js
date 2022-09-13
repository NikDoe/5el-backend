import {Router} from 'express';

const trainRouter = Router();

trainRouter.get('/train', (req, res)=> {
	res.send('все поезда');
})

trainRouter.post('/train', (req, res)=> {
	res.send('новый поезд создан');
})

export default trainRouter;