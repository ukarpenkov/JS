
let myArr = [1, -2, -3, 4, 55, -6, 0]

function everyFoo(arr) {
    let i = 0
    for (i; i < arr.length; i++) {
        let index = arr[i]
        if (index < 0) {
            arr.splice(index, i)
        }
    }
    if (arr[0] > 0) {
        arr.splice(0, 1)

    }
    return arr
}

console.log(everyFoo(myArr))