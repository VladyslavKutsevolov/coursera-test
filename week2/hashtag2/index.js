/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	var newhashtags = [];

		for (var i = 0; i < hashtags.length; i++) {
			hashtag = hashtags[i].toLowerCase();
			if (newhashtags.indexOf(hashtag) == -1) {
				newhashtags.push(hashtag);
			} else if (hashtags.length == 0){ return "";}
		}
		return newhashtags.join(", ");
	};
	
							
