let arr = []

const drawLine = (str) => {
    let i = 0
    for (i; i < str - 1; i++) {
        arr.push('_', '#')
    }
    console.log(arr.join(''))
    console.log(arr.reverse().join(''))
}

const drawTable = (str, col) => {
    drawLine(str + 1)
    for (i = 0; i < (col / 2); i++) {
        drawLine()
    }
}

drawTable(3, 3)

