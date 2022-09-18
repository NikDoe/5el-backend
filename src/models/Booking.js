import { EntitySchema } from 'typeorm';

export default new EntitySchema({
	name      : 'Booking',
	tableName : 'Bookings',
	columns   : {
		id           : {
			primary   : true,
			type      : 'int',
			generated : true
		},
		title        : {
			type : 'varchar'
		},
		depFrom      : {
			type : 'text'
		},
		arrivalTo    : {
			type : 'text'
		},
		depTime      : {
			type : 'time'
		},
		arrivalTime  : {
			type : 'time'
		},
		inTheWay     : {
			type : 'time'
		},
		seat         : {
			type : 'text'
		},
		van          : {
			type : 'text'
		},
		price        : {
			type : 'real'
		},
		fio          : {
			type : 'text'
		},
		passportData : {
			type : 'text'
		},
		phone        : {
			type : 'text'
		}
	}
});
