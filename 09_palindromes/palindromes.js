const palindromes = function (a) {
  let arr = [...a];
  const filtered = arr.filter(checkLetter);

  function checkLetter(letter) {
    if ((/[a-zA-Z0-9]/).test(letter)) {
      return true;
    }
  }

  for (let i = filtered.length - 1; i >= 0; i--) {
    if (filtered[i].toLowerCase() != filtered[filtered.length - 1 - i].toLowerCase()) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
