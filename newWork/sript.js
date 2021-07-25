

function bitPattern(num) {
    // debugger
    let strEarly = []
    num.reduce(function (a, b) {
        if ((a + b) == (a + a)) {
            strEarly.push(1)
        } else {
            strEarly.push(0)
        }
    })
    console.log(strEarly.toString())


}





bitPattern([1, 3, 2, 3, 4, 1, 7, 8]) //1.4.2.3.1

