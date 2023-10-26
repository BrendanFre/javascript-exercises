const add = function(a,b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  return arraySum
};

const multiply = function(array) {
  const arrayMultiply = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
  return arrayMultiply

};

const power = function(a, b) {
  return a ** b
};

const factorial = function(number) {
  let total = 1
  for(let i = 1; i <= number; i++){
    total *= i
  }
  return total
	
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
