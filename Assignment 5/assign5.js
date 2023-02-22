// Part A
const heightLucas=1.69;
const weightLucas=78;
let lucasBMI= weightLucas/(heightLucas*heightLucas);
// console.log(lucasBMI)

const heightPeter=1.95;
const weightPeter=92;
let peterBMI= weightPeter/(heightPeter*heightPeter);
// console.log(peterBMI)

if (lucasBMI > peterBMI){
    lucasHigherBMI=false;
}
else {
    lucasHigherBMI=true;
}

console.log(`The BMI of Peter is ${peterBMI}, the BMI of Lucas is ${lucasBMI}, Peter\'s BMI is higher than Lucas\'s BMI that is ${lucasHigherBMI}`)

// Part B
const celDeg=31;
let fahrenheitDeg= celDeg*1.8+32;
console.log(`${celDeg}\u00B0C is ${fahrenheitDeg}\u00B0F`)

const fahrenDeg=87;
let celsiusDeg= (fahrenDeg-32)*0.5556;
console.log(`${fahrenDeg}\u00B0F is ${celsiusDeg}\u00B0C`)

// Part C
console.log(`Lucas\' BMI (${lucasBMI}) is higher than Peter\'s (${peterBMI})!`)


// Part D
let a=100;
function CovertCelsiusToFahrenheit(a) {
    return a*1.8+32;
}
console.log(`${a}\u00B0C is ${CovertCelsiusToFahrenheit(a)}\u00B0F`)

let b=0;
function CovertCelsiusToFahrenheit(b) {
    return b*1.8+32;
}
console.log(`${b}\u00B0C is ${CovertCelsiusToFahrenheit(b)}\u00B0F`)

let c=10;
function CovertCelsiusToFahrenheit(c) {
    return c*1.8+32;
}
console.log(`${c}\u00B0C is ${CovertCelsiusToFahrenheit(c)}\u00B0F`)


let d=32;
function CovertFahrenheitToCelcius(d) {
    return (d-32)*0.5556;
}
console.log(`${d}\u00B0F is ${CovertFahrenheitToCelcius(d)}\u00B0C`)

let e=10;
function CovertFahrenheitToCelcius(e) {
    return (e-32)*0.5556;
}
console.log(`${e}\u00B0F is ${CovertFahrenheitToCelcius(e)}\u00B0C`)

let f=102;
function CovertFahrenheitToCelcius(f) {
    return (f-32)*0.5556;
}
console.log(`${f}\u00B0F is ${CovertFahrenheitToCelcius(f)}\u00B0C`)