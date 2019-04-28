/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
let time = new Date(date);
let timeObjects = ['years', 'months', 'days', 'hours', 'minutes'];

return {

	add(num, val) {
			if(!timeObjects.includes(val) || (num < 0) || isNaN(num)) {
				throw new TypeError('Invalid input');
		} else if (val === 'years') {
			time.setFullYear(time.getFullYear() + num); 
		} else if (val === 'months') {
			time.setMonth(time.getMonth() + num); 
		} else if (val === 'days') {
			time.setDate(time.getDate() + num); 
		} else if (val === 'hours') {
			time.setHours(time.getHours() + num); 
		} else if (val === 'minutes') {
			time.setMinutes(time.getMinutes() + num); 
		} 
		return this;
	},


	subtract(num, val) {
		if(!timeObjects.includes(val) || (num < 0) || isNaN(num)) {
			throw new TypeError('Invalid input');
		} else if (val === 'years') {
			time.setFullYear(time.getFullYear() - num); 
		} else if (val === 'months') {
			time.setMonth(time.getMonth() - num); 
		} else if (val === 'days') {
			time.setDate(time.getDate() - num); 
		} else if (val === 'hours') {
			time.setHours(time.getHours() - num); 
		} else if (val === 'minutes') {
			time.setMinutes(time.getMinutes() - num); 
		} 
		return this;
	},

	 get value() {
	 	let res = time,
		year = String(res.getFullYear()),
		month = String(res.getMonth() + 1),
		day = String(res.getDate()),
		hour = String(res.getHours()),
		minute = String(res.getMinutes());

		if(month.length < 2) {
		month += '0';
	} if (day.length < 2) {
		day += '0';
	} if (hour.length < 2) {
		hour += '0';
	} if (minute.length < 2) {
		minute += '0';
	}


	let fullYear = [year, month, day].join('-');
	let fullTime = [hour, minute].join(':');

	
	return `${fullYear} ${fullTime}`;
	}
	
}

};
