

// function reverseArray(arr) {
//     let arrRev = arr.reverse()
//     console.log(arrRev)
// }

// reverseArray([1, 2, 3])

function reverseArrayinPlace(arr1) {
    n = arr1.length - 1
    arrRevManual = []
    for (i = 0; i < arr1.length; i++) {
        arrRevManual.push(arr1[n])
        n--
    }
    console.log(arrRevManual)
}
reverseArrayinPlace([1, 2, 3, 4, 5])