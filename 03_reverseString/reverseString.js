const reverseString = function(string) {
  const textArray = string.split('');
  let reversedString = "";
  for (let i = (string.length - 1); i >= 0; i--) {
    reversedString += textArray[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
