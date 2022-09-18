import { Router } from 'express';
import BookingController from '../controllers/BookingController.js';

const bookingRouter = Router();

bookingRouter.get('/booking', BookingController.getAllBookings);
bookingRouter.post('/booking', BookingController.createBooking);

export default bookingRouter;
