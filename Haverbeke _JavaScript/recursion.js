function isEven(a) {
    a = Math.abs(a)
    for (let i = 0; i < a; i++) {
        a = a - 2
        i = 0
    }
    a == 0 ? console.log('четное') : console.log('не четное')
}
isEven(-54)


//Из решебника
// function isEven(n) {
//     debugger
//     if (n == 0) return true;
//     else if (Math.abs(n) == 1) return false;
//     else return isEven(Math.abs(n - 2));
// }

// console.log(isEven(64)) 