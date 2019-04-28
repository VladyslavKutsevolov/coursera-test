/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
		var hashtags = [];
	if (tweet.indexOf('#') == -1) {
		return hashtags;
	} else {
		var tempArray = tweet.split(' ')
		for (var i = 0; i < tempArray.length; i++) {
			if (tempArray[i].indexOf('#') != -1) {
				hashtags.push(tempArray[i].slice(1))
			}
		}
		return hashtags;
	}
};


