// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
		var commandType = command.split(' ')[0];

  switch (commandType) {    
      case 'SHOW':
        return showAll();
        break;
      case 'ADD':
        return addNewPhone();
        break;
      case 'REMOVE_PHONE':
        return deleteNumber();
        break;
    }
	function showAll() {
	    var result = [];
	    for (var name in phoneBook) {
	      result.push(name + ': ' + phoneBook[name].join(', '));
	    }
	    result.sort();
	    return result;
	  }
	  
  	function addNewPhone() {
      var name = command.split(' ')[1]; 
      var numbers = command.split(' ')[2].split(','); 
      if (phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phoneBook[name].concat(numbers);
      } else {
        phoneBook[name] = numbers;   
      }
  }

  	function deleteNumber() {
    	var number = command.split(' ')[1];    
    		for (var key in phoneBook) {      
      			var numberPos = phoneBook[key].indexOf(number); 
      		if (numberPos != -1) {
        		phoneBook[key].splice(numberPos, 1);
        if (phoneBook[key].length == 0) {
          delete phoneBook[key];
        }
        return true;
        }  
      }
      return false;
    }      
  
};
