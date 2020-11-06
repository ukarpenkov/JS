function returnEl(elementId) {
    let element = document.getElementById(elementId)
    return element
}

let myStatus = returnEl("status")
let inputStatus = returnEl("new-status")
let postButton = returnEl("post-status")

function startProcessOfChangeStatus() {
    inputStatus.value = myStatus.innerText
    myStatus.className = "hide" //  style visibility: hidden
    inputStatus.className = 'visible' // style visibility: visible
    postButton.className = 'visible'

}

function postNewStatus() {
    myStatus.className = "visible"
    inputStatus.className = 'hide'
    postButton.className = 'hide'
    myStatus.innerText = inputStatus.value
}

myStatus.addEventListener('click', startProcessOfChangeStatus)
postButton.addEventListener('click', postNewStatus)
