
function logValue(id){
  let el = document.getElementById(id)
  console.log(el.value)
}

// function lastNameLog () {
//   let lastNameId = 'last-name'
//   let lastNameEl = document.getElementById(lastNameId)
//   console.log(lastNameEl.value)
// }

function getValue(id){
  
  let el = document.getElementById(id)
  return el.value
}

let firstNameId = 'first-name'

logValue(firstNameId)


let value = getValue(firstNameId)

alert(value)