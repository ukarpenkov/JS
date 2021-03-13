class Transport {
    constructor(type, price, vendor, model) {
        this.type = type;
        this.price = price;
        this.vendor = vendor;
        this.model = model;
    }

    getInfo = () => {
        return `${this.vendor}, ${this.model}`;
    }

    getPrice = () => {
        return this.price.toLocaleString('ru-RU') + ' ₽';
    }
}

class Car extends Transport {
    constructor(vendor, model, doorsCount, price) {
        super('car', price, vendor, model);
        this.doorsCount = doorsCount;
    }

    getDoorsCount = () => {
        return `Кол-во дверей: ${this.doorsCount}`;
    }
}

class Bike extends Transport {
    constructor(vendor, model, maxSpeed, price) {
        super('bike', price, vendor, model);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed = () => {
        return `Макс. скорость: ${this.maxSpeed} км/ч`;
    }
}



//5
const form = document.forms.formWithInput;
const printResult = document.querySelector('.content__result');
const inputNumber = document.querySelector('.form__input');
const congratulation = document.querySelector('#congratulation');

function findNearestFactorial(value) {
    if (value === '' || value === undefined) {
        return '*';
    }
    if (value <= 0) {
        console.log(value);
        return 1;
    }
    let currentValue = 1;
    for (var i = 1; (currentValue * i) <= value; i++) {
        currentValue *= i;
    }
    return i - 1;
}

form.addEventListener('keyup', evt => {
    evt.preventDefault();
    printResult.textContent = findNearestFactorial(inputNumber.value);
    congratulation.textContent = inputNumber.value && 'Вау, это успех!';
});

form.addEventListener('submit', evt => {
    evt.preventDefault();
});

//4
const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
    const obj = {
        even: [],
        odd: []
    }
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            obj.even.push(array[i])
        } else {
            obj.odd.push(array[i])
        }
    }
    return obj
}
//3
var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArray(words); // возвращает Свет;

function getLastElementOfArray(array) {
    return array[array.length - 1]
}

//2
const arr = [17, 23, 31, 44, 59];

doubleNumber(arr); // возвращает [34,46,62,88,118];

function doubleNumber(array) {
    return array.map(a => a * 2)
}
//1
const data = guestsInfo;
/*
В переменной data хранится такой массив:
[
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
]
*/

function calcAvgAge(array) {
    let sumAge = 0
    for (let i = 0; i < array.length; i++) {
        sumAge = sumAge + array[i].age
    }
    let avgAge = sumAge / array.length
    return avgAge
}