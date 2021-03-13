function primitiveMultiply(a, b) {
    if ((Math.floor(Math.random() * 10)) <= 8) {
        return a * b
    } else {
        let c = 'неее'
        return c
    }
}
function mytry(x, y) {
    while (Number.isInteger(primitiveMultiply(x, y)) === true) {
        debugger
        let opp = primitiveMultiply(x, y)
        return opp

    }
}
console.log(mytry(2, 4))
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Зanepтol");
        return this._content;

    }
};
const withBoxUnlocked = (box) => {
    box.locked = false
    box._content.push('vzlom')
    box.locked = true
}
withBoxUnlocked(box)
console.log(box)