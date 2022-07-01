const ftoc = function (far) {
  let celsius = (far - 32) * (5 / 9);
  celsius = Number(celsius.toFixed(1));
  return celsius;
};

const ctof = function (cel) {
  let fahrenheit = cel * 1.8 + 32;
  fahrenheit = Number(fahrenheit.toFixed(1));
  return fahrenheit;
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
