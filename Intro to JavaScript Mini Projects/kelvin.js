// Constant variable holding temp in kelvin
const kelvin = 0;
// Celsius is always kelvin-273
var celsius = kelvin-273;
// farenheit
var fahrenheit = celsius*(9/5)+32;
//round
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
