

// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let input3 = document.getElementById('input3')
// let inputs = document.getElementsByTagName('input')

// // input1.className = 'error'
// // input2.className = 'error'
// // input3.className = 'error'

// // function setMyNameToAllInputs(someName) {
// //   input1.value = someName
// //   input2.value = someName
// //   input3.value = someName

// // }

// // function setMyLastNameToAllInputs() {
// //   let lastName = 'Karp'
// //   input1.value = lastName
// //   input2.value = lastName
// //   input3.value = lastName
// // }
// // setMyNameToAllInputs('Ura')

// function changeAllInputsValues(value) {
//   input1.value = value
//   input2.value = value
//   input3.value = value
// }

// changeAllInputsValues('444')


// setError('input1')
// setError('wrapp1')

// function sum(a, b) {
//   return result = a + b
// }

// input3.value = sum(1, 45)


// function sayHello() {
//   console.log('Uraa')
// }

// setTimeout(sayHello, 3000)

// function setError(id) {
//   errorElement = document.getElementById(id)
//   errorElement.className = 'error'
// // }

// // function timeoutError() {
// //   setError('input2')
// // }

// // setTimeout(timeoutError, 3000)

// function hideElement(id) {
//   let hidenElement = document.getElementById(id)
//   hidenElement.className = 'hide'
// }

// hideElement('input3')

// function showElement(id) {
//   showenElement = document.getElementById(id)
//   showenElement.className = 'show'
// }

// showElement('input3')

// function intervalHide() {
//   hideElement('input2')
// }

// let x = 0
// function conLog() {
//   input3.value = x++
// }

// setInterval(conLog, 0.001)


// function sum(a, b) {
//   return result = a + b
// }

// input3.value = sum(+"1", +"45")


// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let input3 = document.getElementById('input3')
// let inputs = document.getElementsByTagName('input')


// function removeElement(id) {
//   let delElement = document.getElementById(id)
//   if (delElement != null) { delElement.remove(id) } else { alert('нет такого айди') }
// }

// removeElement('input4')

// function addClassToId(idEl, clName) {
//   let element = document.getElementById(idEl)
//   if (element != null) { element.className = clName }
//   else { alert('нет такого айди!') }


// }

// addClassToId('input1', 'error')
// function addClassToId(idEl, clName) {
//   let element = document.getElementById(idEl)
//   if (element != null) { element.className = clName }
//   else { alert('нет такого айди!') }


// }
// setTimeout(toSet, 1000)

// function toSet() {
// //   addClassToId('input1', 'shlop')
// }


// console.log(inputsArray)


// function rem(a) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].className === 'hey') { a[i].className = 'hide' }
//   }
// // }
// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let input3 = document.getElementById('input3')

// let inputsArray = [input1, input2, input3]

// function hasClassHey(elem) {
//   if (elem.className === 'hey') {
//     return true
//   } else {
//     return false
//   }
// }
// // hasClassHey(input2)

// // function removeElementIfConditionsTrue(arr, predicate) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (predicate(arr[i]) === true) {
// //       arr[i].className = 'hide'
// //     }
// //   }
// // }

// // let result = 0
// // function getArraySum(arrayOfNumber, calculateFunction) {

// //   for (let i = 0; i < arrayOfNumber.length; i++) {
// //     result = arrayOfNumber[i] + arrayOfNumber[i]
// //   }
// //   return calculateFunction
// // }

// // function alertResult(result) {
// //   alert(result)
// // }

// // getArraySum([1, 2, 3], alertResult)


// function getArraySum(arrayOfNumber, callback) {
//   a = arrayOfNumber.reduce(function (prev, next) {
//     return prev + next;
//   });
//   callback(a)
// }

// function alertResult(num) {
//   console.log(num)
// }

// getArraySum([1, 2, 3, 4, 5], alertResult) //результат 15

// // function getArraySum(arrayOfNumbers, callback) {
// //   let i
// //   for (i = 0; i < arrayOfNumbers.length; i++) {
// //     debugger
// //     a = arrayOfNumbers[i] + arrayOfNumbers[i]
// //   }
// //   callback(a)
// // }

// // function alertResult(num) {
// //   console.log(num)
// // }
// // getArraySum([1, 2, 3, 1], alertResult)


