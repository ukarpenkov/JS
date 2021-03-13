

let uslow = (i, num) => {
    while (i < num) {
        debugger
        i++
        return num
    }
    if (i == num) {
        console.log('end')
        return false
    }
}





function cycle(u, t) {

    if (u == 10) {
        console.log(t++)
    } else if (false) {
        console.log('fff')
    }
}

console.log(cycle(uslow(1, 10), 100))

