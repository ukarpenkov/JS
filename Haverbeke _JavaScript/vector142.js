

class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    plus() {
        console.log(this.x + this.y)
    }
    dec() {
        console.log(this.x - this.y)
    }
    get length() {
        console.log(this.x * this.y)
    }
}
let op = new Vec(3, 5)
console.log(op.length())

// class Clock {
//     constructor({ template }) {
//         this.template = template
//     }


//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     };

//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
