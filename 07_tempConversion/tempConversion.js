const convertToCelsius = function(temperature) {
// (11°F − 32) × 5/9 = -11.67

let celsiusValue = parseFloat(((temperature - 32) * 5/9).toFixed(1))
return celsiusValue


};

const convertToFahrenheit = function(temperature) {
  // (0°C × 9/5) + 32
  let farenheitValue = parseFloat(((temperature * 9/5) + 32).toFixed(1))
  return farenheitValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
