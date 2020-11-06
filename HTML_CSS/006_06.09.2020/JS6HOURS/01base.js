// // 1 Переменные
// //camelCase
// const firtName = 'Ura'//string
// //const age = 29; //number
// const isProgrammer = true //boolean

// const _private = 'private'
// const $ = 'some value'
// const withNum5 = '5'

// // 2 Мутирование 
// //console.log('Имя человека ' + firtName + ' а возраст ' + age)
// //console.log(age.toString())
// //alert('Имя человека ' + firtName + ' а возраст ' + age)

// //const lastName = prompt('Введите фамилию')
// //alert (firtName + ' ' + lastName)

// //3 Операторы
// let currentYear = 2020
// const birthYear = 1990
// const age = currentYear + birthYear
// //console.log(age)
// const a = 10
// const b = 5
// let c = 32
// //c = c + a
// //c += a
// c -= a
// c *= a
// c /= a
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)
// //4 Типы данных
// const isProgrammer = true
// const name = 'Ura'
// const age = 29
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// //Приоритет операторов
// const fullAge = '29'
// const birthYear = '1990'
// const currentYear = '2020'

// // //> < >= <=
// // const isFullAge = currentYear - birthYear >= fullAge // 26>=27
// // console.log(isFullAge)

//6 Условные операторы
// const courseStatus = 'ready' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('курс уже готов и его можно пройти')
// } else if (courseStatus === 'pending') {
//     console.log('курс в разработке') 
// } else {
//     console.log('не делался. провал')
// }

// const isReady = false
// // if (isReady) {
// // console.log('Все готово')
// // } else {
// // console.log('Все плохо!')
// // }
// isReady ? console.log('ready') : console.log('все плохо') //Тернарное выражение

// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)


// 7 Булевая логика
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

//8 Функции

// function calcAge(year) {
//     return 2020 - year
// }

// // const myAge = calcAge(1993)
// // console.log(calcAge(22020))
// // console.log(calcAge(34))
// // console.log(calcAge(2020))

// function logInfoAbout (name, year){
//     const age = calcAge(year)
//     if (age>0){
//         console.log('Чел по имени '+name+' Сейчас имеет возвраст '+age)
//     } else if (age==0) {
//         console.log('Чел по имени '+name+' ЕЩЕ НЕ РОДИЛСЯ')
//     } else if (age<0) {
//         console.log('Чел по имени '+name+' Только в планах')
//     }
    
// }
// logInfoAbout('Ura', '1990')
// logInfoAbout('Gamora', '2020')
// logInfoAbout('Lera', '2022')

// 9 Массивы
// const cars = ['opel', 'mers', 'ford']
// console.log(cars)
// const cars = new Array ('opel', 'mers', 'ford')
// console.log(cars.length)
// console.log(cars)
// console.log(cars[0])
// cars[0] = 'porsche'
// console.log(cars)
// cars[cars.length] = 'mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['opel', 'mers', 'ford', 'porshe']
// for (let i = 0; i<cars.length; i++){
//     // console.log(i)
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

//11 Объекты
// const person = {
//     firstName: 'Ura',
//     lastName: 'Karp',
//     year: 1990,
//     lang: ['eng', 'ru', 'de'],
//     hasWife: true,
//     greeting: function(){
//         console.log(person)
//     }
// }
// console.log(person.firstName)
// // console.log(person['lastName']) одно и то же с верхним
// const key = 'year'
// console.log(person[key])
// person.greeting()
// person.isProgrammer = true
// console.log(person)






















































