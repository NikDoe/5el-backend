class BookingController {
	async createBooking (req, res) {
		res.send('создана новая бронь');
	}

	async getAllBookings (req, res) {
		res.send('все брони получены');
	}
}

export default new BookingController();
