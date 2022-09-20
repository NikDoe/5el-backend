import bookingService from '../services/BookingService.js';

class BookingController {
	async createBooking(req, res) {
		try {
			const booking = await bookingService.createBooking(req.body);
			return res.json(booking);
		} catch (error) {
			console.log(error);
		}
	}

	async getAllBookings(req, res) {
		try {
			const bookings = await bookingService.getAllBookings();
			return res.json(bookings);
		} catch (error) {
			console.log(error);
		}
	}
	async getOneBooking(req, res) {
		try {
			const oneBooking = await bookingService.getOneBooking(req.params);
			res.json(oneBooking);
		} catch (error) {
			console.log(error);
		}
	}
}

export default new BookingController();
