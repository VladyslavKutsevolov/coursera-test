module.exports = function (date) {
    var newDate = new Date(date);
    var dateVal = ['years', 'months', 'days', 'hours', 'minutes'];
    var time = {

            add: function (amount, name) {
                if (amount < 0) {
                    throw new TypeError();
                }
                if (!dateVal.includes(name)) {
                    throw new TypeError();
                }
                if (name === 'years') {
                    newDate.setFullYear(newDate.getFullYear() + amount);

                }
                if (name === 'months') {
                    newDate.setMonth(newDate.getMonth() + amount);

                }
                if (name === 'days') {
                    newDate.setDate(newDate.getDate() + amount);

                }
                if (name === 'hours') {
                    newDate.setHours(newDate.getHours() + amount);

                }
                if (name === 'minutes') {
                    newDate.setMinutes(newDate.getMinutes() + amount);
                }
                return this;
            },

            subtract: function (amount, name) {
                if (amount < 0) {
                    throw new TypeError();
                }
                if (!dateVal.includes(name)) {
                    throw new TypeError();
                }
                if (name === 'years') {
                    newDate.setFullYear(newDate.getFullYear() - amount);

                }
                if (name === 'months') {
                    newDate.setMonth(newDate.getMonth() - amount);

                }
                if (name === 'days') {
                    newDate.setDate(newDate.getDate() - amount);

                }
                if (name === 'hours') {
                    newDate.setHours(newDate.getHours() - amount);

                }
                if (name === 'minutes') {
                    newDate.setMinutes(newDate.getMinutes() - amount);

                }
                return this;
            },
            get value() {
            	var res = newDate,
                	year = res.getFullYear(),
                	month = res.getMonth() +1,
                	day = res.getDate(),
                	hour = res.getHours(),
                	minute = res.getMinutes();
                if (month < 10) {
                    month = '0' + month;
                }
                if (day < 10) {
                    day = '0' + day;
                }
                if (hour < 10) {
                    hour = '0' + hour;
                }
                if (minute < 10) {
                    minute = '0' + minute;
                }
                
                let fullYear = [year, month, day].join('-');
                let fullTime = [hour, minute].join(':');
                return `${fullYear} ${fullTime}`;


            }

    }

    return time;
};