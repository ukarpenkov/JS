// let buttonPlus = document.getElementById('buttonPlus')
// let buttonMinus = document.getElementById('buttonMinus')
// let buttonMultiply = document.getElementById('buttonMultiply')
// let buttonDevide = document.getElementById('buttonDevide')
// let arrayOfButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide]

let input1 = document.getElementById('number1')
let input2 = document.getElementById('number2')
let arrayOfButtons = document.getElementsByClassName('operation-button')

function makeOperation(operationCode) {
  let number1 = Number(input1.value)
  var number2 = Number(input2.value)
  if (operationCode === '+') {
    var result = number1 + number2
  } else if (operationCode === '-') {
    var result = number1 - number2
  } else if (operationCode === '*') {
    var result = number1 * number2
  } else if (operationCode === '/') {
    var result = number1 / number2
  }
  window.alert(result)
}

function operationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget
  let operation = clickedElement.innerHTML
  makeOperation(operation)
}

for (let i = 0; i < arrayOfButtons.length; i++) {
  let button = arrayOfButtons[i]
  button.addEventListener('click', operationButtonClick)
}





