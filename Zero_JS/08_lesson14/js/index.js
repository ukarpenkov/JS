
function addErrorClass(elementId) {
  let element = document.getElementById(elementId)
  element.className = 'error-input'
}

function addErrorClassToAllinputs() {
  addErrorClass('first-name')
  addErrorClass('last-name')
  addErrorClass('address')
}


// setTimeout(addErrorClassToAllinputs, 2000)

let sendButton = document.getElementById('send-button')

sendButton.addEventListener('blur', addErrorClassToAllinputs)

// sendButton.addEventListener("mousemove", addErrorClassToAllinputs )

