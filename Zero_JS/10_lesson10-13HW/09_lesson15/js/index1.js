// function chooseElement(elementId) {
//     return element = document.getElementById(elementId)
// }


function addColorClassToAllInputs(id, col) {
    document.getElementById(id).style.background = col
}


function getConcreteFunctionByName(id, color) {
    switch (color) {
        case 'r':
            addColorClassToAllInputs(id, 'red')
            break
        case 'b':
            addColorClassToAllInputs(id, "blue")
            break
        case 'g':
            addColorClassToAllInputs(id, "green")
            break
    }
}


getConcreteFunctionByName("input300", 'r')

























function addHideClassToAllInputs(id) {
    addClass(id)
    id.className = 'hide'
}