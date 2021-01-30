
let a = {
    color: 'blue',
    speed: 200
}
let b = {
    color: 'blue',
    speed: 200
}

function deepEqual(one, two) {
    x = JSON.stringify(one)
    y = JSON.stringify(two)
    console.log(x == y)
}

deepEqual(a, b)