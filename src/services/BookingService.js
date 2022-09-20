import { bookingRepo } from '../utils/utils.js';

class BookingService {
	async createBooking(booking) {
		const newBooking = bookingRepo.create(booking);
		await bookingRepo.save(newBooking);
		return newBooking;
	}

	async getAllBookings() {
		const allBookings = bookingRepo.find();
		return allBookings;
	}

	async getOneBooking({ id }) {
		const booking = await bookingRepo.findOne({ where: { id } });
		return booking;
	}
}

export default new BookingService();
