const convertToCelsius = function(int) {

  const convertedVal = ((int -32) * (5/9));
  return  (Math.round(convertedVal * 10) / 10);
}

const convertToFahrenheit = function(int) {
  const convertedVal = (int * 9/5) + 32;
  return  (Math.round(convertedVal * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
