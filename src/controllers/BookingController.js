import bookingService from '../services/BookingService.js';

class BookingController {
	async createBooking(req, res) {
		const booking = await bookingService.createBooking(req.body);
		return res.json(booking);
	}

	async getAllBookings(req, res) {
		const bookings = await bookingService.getAllBookings();
		return res.json(bookings);
	}
}

export default new BookingController();
