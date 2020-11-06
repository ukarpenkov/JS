var changeValuesBtn = document.getElementById('change-values-btn');


function returnEl(elementId) {
    let element = document.getElementById(elementId)
    return element
}

let firstValue = returnEl('first-value')
let secondValue = returnEl('second-value')
let hide1 = returnEl('hide1')
let hide2 = returnEl('hide2')

var onChangeValuesBtnClick = function () {
    hide2.value = firstValue.value
    hide1.value = secondValue.value
    firstValue.value = hide1.value
    secondValue.value = hide2.value
}

changeValuesBtn.addEventListener('click', onChangeValuesBtnClick);