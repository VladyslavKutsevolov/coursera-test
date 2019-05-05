/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
	var sortFriends = deepClone(collection);
	var tasks = [].slice.call(arguments).slice(1);

	tasks.sort((a,b) => a[0] === 'filterIn' ? -1 : 1)
	tasks.forEach((action) => {
		var actionName = action[0];
		switch(actionName) {
			case 'filterIn' :
			var prop = action[1];
			var val = action[2];
			sortFriends = sortFriends.filter((item) => {
				return prop in item && val.includes(item[prop]);
			})
			break;

			case 'select' :
			var availableFriends = action[1];
			sortFriends.forEach((item) => {
				Object.keys(item).forEach((key) => {
					if (!availableFriends.includes(key)) {
						delete item[key];
					}
				})
			})
		}
	})
	return sortFriends;
}

/**
 * @params {String[]}
 */
function select() {
	var fields = [].slice.call(arguments);
	return ['select', fields];
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	return ['filterIn', property, values];
}

function deepClone(collection) {
	var cloneCol = [];
	collection.forEach((item) => {
		var cloneItem = {};
		Object.keys(item).forEach((key) => { cloneItem[key] = item[key];})
		cloneCol.push(cloneItem);
	})
	return cloneCol;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
