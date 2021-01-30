// console.log(sum(range(l, 10)));


function rage(firstNum, lastNum) {
    let arr = []
    for (let i = firstNum; i < lastNum + 1; i++) {
        arr.push(i)
    }
    console.log(arr.reduce((a, b) => a + b))
}
rage(1, 10)

//с шагом
// }
// rage(1, 10)
// function rage(firstNum, lastNum, step) {
//     let arr = []
//     for (let i = firstNum; i < lastNum + 1; i = i + step) {
//         arr.push(i)
//     }
//     
//     console.log(arr)

// }
