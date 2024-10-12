const convertToCelsius = function(farenheit) {
  // to one decimal place
  // (x - 32) * (5 / 9)
  let celcius = (farenheit - 32) * (5 / 9);
  let rounded = Math.round(celcius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celcius) {
  // (x * (9 / 5) + 32)
  let farenheit = (celcius * (9 / 5) + 32);
  let rounded = Math.round(farenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
