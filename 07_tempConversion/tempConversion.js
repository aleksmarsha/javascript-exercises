const convertToCelsius = function(oneTemperature) {
  let celsius = (oneTemperature - 32) * 0.5556;
  return Math.round(celsius * 10) / 10; 
};

const convertToFahrenheit = function(twoTemperature) {
  let fahrenheit = (twoTemperature * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
