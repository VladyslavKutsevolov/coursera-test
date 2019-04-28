/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
		if ((hours >= 0 && hours <= 23) && (minutes >=0 && minutes <= 59)) {
			var minute = (minutes + interval)%60;
			var hours = (hours + Math.floor((minutes + interval)/60)) % 24;
			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minute < 10) {
				minute = '0' + minute;
			}
			return hours + ':' + minute;
		}
};	
