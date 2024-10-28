const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  const answer = a.reduce((total, number) => {
    return total + number;
  }, 0);
  return answer;
};

const multiply = function(a) {
  const answer = a.reduce((total, number) => {
    return total * number;
  });
  return answer;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
  else {
    let total = a;
    for (i = a - 1; i > 0; i--) {
      total = total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
