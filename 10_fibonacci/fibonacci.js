const fibonacci = function(num) {

  fibonacciSequence = [0, 1];

  if (typeof num === "string") {
    num = parseInt(num);
  }
  if (num < 0) {
    return "OOPS"; 
  }
  else if (num == 0) {
    return 0;
  }
  else if (num == 1) {
    return 1;
  }
  else {
    for (i = 2; i <= num; i++) {
      fibonacciSequence[i] = (fibonacciSequence[i-1] + fibonacciSequence[i-2]);
    }
  }

return fibonacciSequence[num];
}

// Do not edit below this line
module.exports = fibonacci;
