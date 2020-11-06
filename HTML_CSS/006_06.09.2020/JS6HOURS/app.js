// const name = 'Ura'
// const age = 30
// function getAge(){
//     return age
// }

// // const output = 'Привет, меня зовут ' + name +' и мне лет- '+age
// const output = `Привет меня звать ${name} мне ${age<20 ? 'A' : 'B'} лет`

// console.log(output);

// const output = 
//     <div> This is </div>
//     <p> This is p </p>

// console.log(output);

// const name = 'Ura'
// //newstring
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('ra'));
// console.log(name.startsWith('Ur'));
// console.log(name.toLowerCase().startsWith('ur'));
// console.log(name.endsWith('ra'));
// console.log(name.repeat(3));
// const string = '    pass     '
// console.log(string.trim());
// console.log(string.trimLeft());


// function logPerson(s, name, age){
//     if(age<0){
//         age = 'Еще не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Евдотья'
// const personName2 = 'пушк'
// const personAge = '46'
// const personAge2 = '-10'
// const output = logPerson`Имя: ${personName}, Age: ${personAge}!`
// const output2 = logPerson`Имя: ${personName2}, Age: ${personAge2}!`
// console.log(output);
// console.log(output2);


// // 1 Функции


// // function expression
// const greet2 = function greet2(name, age){
//     console.log("Привет-2 ",name," my age ", age);
// }
// greet('Lego','35')
// greet2('Sisa','800')
// //function declaration
// function greet(name, age){
//     console.log('Привет ', name, 'My Age', age);
// }

// // console.log(typeof greet)
// // console.dir(greet)

// // 2 Анонимные функ-ии
// let counter = 0
// const interval = setInterval(function(){
//     if (counter === 5){
//         clearInterval(interval)   //clearTimeout
//     } else {console.log(++counter);}
// }, 1000)


//3 Стрелочные функции
// function greet(name, age){
//         console.log('Привет ', name);
//     }

// const arrow = (name) => {
//     console.log('Привет ', name);
// }

// const arrow2 = name => console.log('привет ', name);

// arrow2('Юра')

// // const pow2 = num => {
// //     return num ** 2 
// // }
// // console.log(pow2(5));

// const pow2 = num => num ** 2
    
// console.log(pow2(454));

// Параметры по умолчанию

// const sum = (a=1000,b=a*2) => a+b
// console.log(sum(41));

// function sumAll(...all){
//     console.log(all)
//     let result = 0
//     for (let num of all){
//         result +=num
//     }
//     return result
// }
// const res = sumAll(1,3,4,5,6,7,8,7779,0)
// console.log(res);

// // 5 Замыкания
// function createMember(name) {
//     return function(lastName){
//         console.log(name+lastName);

//     }
// }

// const logWithLastName = createMember('Urui')
// console.log(logWithLastName('Petrov'));
// console.log(logWithLastName('пунцов'));


//9 Массивы

// const cars = ['Mazda', 'ford', 'bmw', 'Mersedes']
// const people = [
//     {name: 'Ura', budget: 4000},
//     {name: 'Lera', budget: 56000},
//     {name: 'Stas', budget: 52},
// ]
// const fib = [1,1,2,3,5,8,13,]
// //func
// function addItemToEnd(){

// }
// //method
// // cars.push('Reanault')
// // console.log(cars)
// // cars.unshift('Volovo')
// // console.log(cars)

// // const firstItem = cars.shift()
// // const lastCar = cars.pop()
// // console.log(cars);
// // console.log(firstItem);

// // console.log(cars.reverse());
// // console.log(cars)

// // const index = cars.indexOf('bmw');
// // const index = people.findIndex(function(person){
// //     return person.budget === 52
// // })
// // const person = people.find(function(person){
// //     return person.budget === 4000
// // })
// // let findedPerson
// // for (const person of people){
// //     // console.log(person);
// //     if (person.budget === 4000){
// //         findedPerson = person
// //     }
// // }
// // console.log(findedPerson);

// const person = people.find(person => person.budget === 52)

// console.log(person);

// console.log(person);


// cars[index] = 'Porsche'
// console.log(cars);

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars);

// const pow2 = num => num **2
// const sqrt = num => Math.sqrt(num)
// const pow2fib = fib.map(pow2).map(sqrt)
// console.log(pow2fib);
// const pow2 = num => num **2
// const pow2fib = fib.map(pow2)
// const filterNum =  pow2fib.filter(num => num >20)
// console.log(filterNum);

// const cars = ['Mazda', 'ford', 'bmw', 'Mersedes']
// const people = [
//     {name: 'Ura', budget: 4000},
//     {name: 'Lera', budget: 56000},
//     {name: 'Stas', budget: 52} 
// ]

// const allBudget = people.filter(person => person.budget > 2000)
// .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
// console.log(allBudget);

// //Задача 1

// const text = 'Привет, мы изучаем ЖС'
// const reversText = text.split('').reverse().join('')
// console.log(reversText);



// const person = {
//     name: 'Ura',
//     age: '30',
//     isProgrammer: true,
//     languages: ['ru', 'kz', 'ch'],
//     // 'complex key': 'Complex Value',
//     // ['Key_'+(1+3)]: 'Computed Key',
//     greet() {
//         console.log('greet from person');
//     }
// }

// console.log(person.name);
// console.log(person['age']);
// console.log(person["complex key"]);
// console.log(person);
// person.greet()

// person.age++
// person.languages.push('ua')
// console.log(person);
// // person['key_4']=undefined

// delete person['key_4']
// console.log(person);

// const name = person.name
// const age = person.age
// const lang = person.languages

// const {name, age: personAge = 10, languages} = person

// console.log(name, personAge, languages);
// console.log(person);
// for (let key in person){
//     if(person.hasOwnProperty(key)){
//     console.log('key:',key);
//     console.log('value:', person[key]);
//     }
// }

// const keys = Object.keys(person)



// keys.forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// })


// Context
// const person = {
//     name: 'Ura',
//     age: '30',
//     isProgrammer: true,
//     languages: ['ru', 'kz', 'ch'],
//     greet() {
//         console.log('greet from person');
//     },
//     info(){
//         console.log(this);
//         console.info('Инфо про чела по имени:', this.name);
//     }
// }


// const person = {
//         name: 'Ura',
//         age: '30',
//         isProgrammer: true,
//         languages: ['ru', 'kz', 'ch'],
//         greet() {
//             console.log('greet from person');
//         },
//         info(){
//             console.log(this);
//             console.info('Инфо про чела по имени:', this.name);
//         }
//     }

// const logger = {
//     keys(){
//         console.log('Object keys: ', Object.keys(this));
//     },

//     withParams (top = false, between =false, bottom = false){
//         if (top){
//             console.log('----Start----');
//         }
//         Object.keys(this).forEach((key,index,array) => {
//             console.log(`"${key}: ${this[key]}"`)
//         if (between && index!==array.length-1){
//             console.log('---------------------');
//         }
//     })  
//         if (bottom){
//             console.log('----end----');
//         }
//     }
// }

// // logger.withParams.call(person, true,true, true)
// logger.withParams.apply(person, [true,true, true])
// // const bound = logger.keys.bind(logger)
// // bound()

// // logger.keys.call(person)
// // logger.keysAndValues.call({a: 1, b:2})


// Event LOOP - АСИнХРОННОСТЬ

// const timeout = setTimeout(() =>{
    
//     console.log('Время вышло');
// }, 2500)

// clearTimeout(timeout)

// const interval = setInterval(()=>{
//     console.log('Время вышло');
// }, 1000)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(()=>{
//     console.log('after2 sec')
// }, 2000)


// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve()
//             reject ('Что то не такккк' )
//         }, wait)
//     })
//     return promise
// }

// // delay (2500)
// //     .then(()=>{
// //         console.log('After 2 sec');
// //     })
// //     .catch(err => console.error('Error', err))
// //     .finally (()=> console.log('Finally'))

// const getData = () => new Promise (resolve => resolve([
//     1,2,3,5,6,7,8
// ]))

// // getData().then(data => console.log(data))


// async function acyncExample () {
//     try{
//     await delay(3000)
//     const data = await getData()
//     console.log('Data', data)} catch(e){
//         console.log(e)
//     } finally {
//         console.log('finally');
//     }
// }
// acyncExample()


// работа с DOM


//window.alert ('1')
// window.prompt('how you???')
// window.confirm('hhhhhhh')

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2')
const heading2 = document.querySelector('h2')  //всегда 1 элемент первый если2 аш2 если все то квери селетор олл
const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(heading2);
// console.log(heading3);
console.dir(heading.textContent)
console.log(h2List);


setTimeout (()=>{
 addStylesTo(heading, 'KS', 'red')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event)=>{
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})
setTimeout (()=>{
    addStylesTo(link, 'Практикуйсия и', 'red')
   }, 2500)

setTimeout (()=>{
    addStylesTo(heading2, 'Все получится!!!', 'yellow', '2em')
   }, 4500)




function addStylesTo (node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'blue'
    node.style.padding = '2em'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}


// https://developer.mozilla.org/ru/docs/Web/Events



heading.onclick = () => {
    if (heading.style.color === 'red'){
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black' 
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'red'){
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'red'
        heading2.style.backgroundColor = 'black' 
    }
})




























































































