function returnEl(elementId) {
  let element = document.getElementById(elementId)
  return element
}
function showPass() {
  returnEl('inputarea').type == 'text' ? returnEl('inputarea').type = 'password'
    : returnEl('inputarea').type = 'text';
}
let showButton = returnEl("Sbutton")
showButton.addEventListener('click', showPass)



