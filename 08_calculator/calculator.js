const add = function(num1,num2) {
  return num1 + num2
};

const subtract = function(num1,num2) {
  return num1 - num2
};

const sum = function(numbersArray) {
	let sum = 0
  for(let number of numbersArray){
    sum += number
  }
  return sum
};

const multiply = function(numbersArray) {
  let result = 1
  for(let number of numbersArray){
    result *= number
  }
  return result
};

const power = function(base,power) {
  let num = base ** power
  return num
};

const factorial = function(number) {
  let sum = 1
  if(number == 0){
    return sum
  }
  if(number >0){
    for(let i = 1 ;i <= number ; i++){
      sum *= i
    }
    return sum
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
