(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "Jack", "Jimmy"];

	for (var i in names) {
		var firstLetter = names[i].charAt(0).toLowerCase(0);

		if (firstLetter === 'j') {
			byeSpeaker.speak(names[i]);
		}
		else {
			helloSpeaker.speak(names[i]);
		}
	}
})();