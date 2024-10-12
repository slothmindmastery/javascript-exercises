const sumAll = function(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
    return "ERROR";
  } 
  let total = 0;
  let startNumber = 0;
  let endNumber = 0;
  if (x < y) {
    startNumber = x;
    endNumber = y;
  }
  else {
    startNumber = y;
    endNumber = x;
  }
  for (let i = startNumber; i <= endNumber; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
