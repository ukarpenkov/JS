// let user = {
//     name: 'Jhon',
//     surname: 'Smith',
// }

// user.name = 'Pete'

// // delete user.name


// isEmpty = (obj) => {

//     for (let key in obj) {
//         // если тело цикла начнет выполняться - значит в объекте есть свойства
//         return false;
//     }
//     return true;
// }

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// // let sum = salaries.John + salaries.Ann + salaries.Pete

// // alert(sum)
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);


// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// let multiplyNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof (obj[key] = 'number'){
//             obj[key] * 2
//         }
//     }
// }

// multiplyNumeric(menu)


function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu)

alert(menu.width)
alert(menu.height)
