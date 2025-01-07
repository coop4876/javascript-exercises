const convertToCelsius = function(value) {
  let temp = (value - 32) * 5/9
  if (temp % 1 === 0){
    return temp
  }
  return +temp.toFixed(1)
};

const convertToFahrenheit = function(value) {
  let temp = (value * 9/5) + 32
  if (temp % 1 === 0){
    return temp
  }
  return +temp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
