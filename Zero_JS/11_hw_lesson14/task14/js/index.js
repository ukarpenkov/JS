// let buttonPlus = document.getElementById('buttonPlus')
// let buttonMinus = document.getElementById('buttonMinus')
// let buttonMultiply = document.getElementById('buttonMultiply')
// let buttonDevide = document.getElementById('buttonDevide')
// let arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide]

let input1 = document.getElementById('number1')
let input2 = document.getElementById('number2')
let calc = document.getElementById('calc')
let chouse = document.getElementById('chouse')
let result = document.getElementById('result')


let sum = (a, b) => {
  return a + b
}
let minus = (a, b) => {
  return a - b
}
let mult = (a, b) => {
  return a * b
}
let devide = (a, b) => {
  return a / b
}

let resul1 = () => {
  let num1 = Number(input1.value)
  let num2 = Number(input2.value)
  if (chouse.value === '+') {
    let r = sum(num1, num2)
    result.innerHTML = r
  } else if ((chouse.value === '-')) {
    let r = minus(num1, num2)
    result.innerHTML = r
  } else if ((chouse.value === '*')) {
    let r = mult(num1, num2)
    result.innerHTML = r
  } else if ((chouse.value === '/')) {
    let r = devide(num1, num2)
    result.innerHTML = r
  }

}





calc.addEventListener('click', resul1)




