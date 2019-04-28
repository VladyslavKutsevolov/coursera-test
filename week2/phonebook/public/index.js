// Телефонная книга
const phoneBook = {
};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = command => {
  const keys = command.split(' ');
  if (keys[0] === 'ADD'){
    return add(keys[1], keys[2]);
  } else if (keys[0] === 'SHOW') {
    return show();
  } else if (keys[0] === 'REMOVE_PHONE') {
    return remove(keys[1]);
  } else {
    return 'Command not found!';
  }
};


function add(name, phoneNumbers = '') {
  const phoneNumbersArray = phoneNumbers.split(',');

  if (phoneNumbersArray.length === 0) {
    return 'Phone number is required';
  }
  // use SET instead of validate unique phone numbers
  if (phoneBook.hasOwnProperty(name)){
    phoneNumbersArray.forEach((phoneNumber) => {
      if (!phoneBook[name].includes(phoneNumbers)) {
        //phoneBook[name] = [...phoneBook[name], phoneNumber];
        phoneBook[name].push(phoneNumber);
      }
    });
  } else {
    phoneBook[name] = phoneNumbersArray;
  }
}

function show() {
  const res = [];

  for (const name in phoneBook){
    if (phoneBook.hasOwnProperty(name) && phoneBook[name].length > 0){
      res.push(`${name}: ${phoneBook[name].join(', ')}`);
    }
  }

  return res.sort();
}

function remove(phoneNumber) {
  for (const name in phoneBook) {
    if (phoneBook[name].indexOf(phoneNumber) !== -1) {
      phoneBook[name].splice(phoneBook[name].indexOf(phoneNumber), 1);
      return true;
    }
  }

  return false;
}