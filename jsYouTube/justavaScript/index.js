// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function(){
//         console.log('Greet!!');
//     }
// }

// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function(){
//     console.log('Greet!!');
//     }
// })

// Object.prototype.sayHello = function(){
//     console.log('Hello!');
// }

// const lena = Object.create(person)
// lena.name = 'Elena'


// const str =  new String ('I am string')

// Асинхронность.Что такое Event Loop. JS SetTimeout 0

// console.log('Start');



// console.log('Start2');

// function timeOut5sec(){
//     console.log('5sec');
// }

// setTimeout (function() {
//     console.log('after')
// }, 2000)

// console.log('end');

// setTimeout(timeOut5sec, 5000)

// Промисы

// console.log('Request data...')

// setTimeout(() =>{
//     console.log('Preparing data')

//     const backEnd = {
//         server: 'AWS',
//         prot: '2000',
//         status: 'Working'
//     }

//     setTimeout(()=>{
//         backEnd.modified = true
//         console.log('Data receved', backEnd);
//     },2000)
// }, 2000)

// console.log('Request data...')
// const p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing data')
//         const backEnd = {
//         server: 'AWS',
//         prot: '2000',
//         status: 'Working'
//     }
//     resolve(backEnd)
//     },2000)

// })

// p.then(data=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })

// }).then(clientdata =>{
//     // console.log('Data receved', clientdata);
//     clientdata.fromPromise = true
//     return clientdata
// }).then (data =>{
//     console.log('Modified', data);
// })
// .catch(err=>console.log('Error', err))
// // .finally(()=> console.log('Finally'))


// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(()=>resolve(), ms)
//     })
// }

// // sleep(2000).then(() => console.log('after 2 sec'))
// // sleep(3000).then(() => console.log('after 3 sec'))

// Promise.all([sleep(2000), sleep(5000)])
// .then(()=>{
//     console.log('all promises')
// })

// Promise.race([sleep(2000), sleep(5000)])
// .then(()=>{
//     console.log('race promises')
// })

// class Animal{

//     static type = 'ANIMAL'

//     constructor(optons){
//         this.name = optons.name
//         this.age = optons.age
//         this.hasTail = optons.hasTail
//     }
//     voice(){
//         console.log('im Animal!!!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal{
//     static type = 'CAT'
//     constructor(optons){
//         super(optons)
//         this.color = optons.color
//     }
//     voice(){
//         super.voice()
//         console.log('im VAAAT!!!');
//     }


//     get ageInfo(){
// //         return this.age * 7
// //     }

// //     set ageInfo(){
// //         this.age = newAge
// //     }

// // }
// // const cat = new Cat({
// //     name: 'Cat',
// //     age: 7,
// //     hasTail: true,
// //     color: 'black'
// // })

// class Component {
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }
//     hide(){
//         this.$el.style.display = 'none'
//     }
//     show(){
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component{
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size +'px'
//         this.$el.style.background = options.color
        
//     }
// }




// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// class Circle extends Box {
//     constructor(options){
//         super(options)
//         this.$el.style.borderRadius = '50%'
//     }
// }


// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'green'
// })

// УРОК 8!!!!!!!!!!!!!!!!!!!!!!!!!
// const delay = ms => {
//     return new Promise(r => setTimeout(()=> r(), ms))
// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo started')
//     return delay(2000)
//     .then(()=> fetch(url))
//     .then(response => response.json())
// }
// fetchTodos()
// .then(data =>{
//     console.log('Data----------', data);
// })
// .catch(e=>console.error(e))

// async function fetchAsyncTodos(){
//     console.log('Fetch todo started')
// //     try {
// //     await delay(2000)
// //     const response = await fetch(url)
// //     const data = await response.json()
// //     console.log('Data----async await------', data);
// //     }catch (e) {
// //     console.error(e)
// //     } finally{
// //         console.log('VSEEE');
// //     }
// // }

// // fetchAsyncTodos()


// // proxy!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const person = {
//     name: 'Ura',
//     age: '25',
//     job: 'Ingener'
// }

// const op  = new Proxy(person, {
//     get(target, prop){
//         console.log(`Getting prop ${prop}`)
//         return target[prop]
//     },
//     set(target, prop, value){
//         if (prop in target){
//         target[prop]=value
//         } else{
//             throw new Error (`No ${prop} field in target`)
//         }
//     },
//     has(target, prop){
//         return ['age', 'name', 'job'].includes(prop)
//     },
//     deleteProperty(target,prop){
//         console.log('deleting.........', prop)
//         delete target[prop]
//     }
// })

// // Functuoins for proxy

// const log = text => `Log: ${text}`

// const fp = new Proxy(log, {
//     apply(target, thisArg, args){
//         console.log('Calling fn........')

//        return target.apply(thisArg, args).toUpperCase()

//     }
// })

// //Classses

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }

// const PersonProxy = new Proxy(Person,{
//     construct(target, args){
//         console.log('Construct......')

//         return new Proxy (new target(...args),{
//             get(t, prop){
//                 console.log(`Getting prop ${prop}`)
//                 return t[prop]
//             }
//         })
//     }
// })

// const p = new PersonProxy('Ura', 455)


//Genetators

// function* strGenerator(){
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }

// const str = strGenerator()

// function* numberGen(n=10){
//     for(let i=0; i<n; i++){
//         yield i
//     }
// }

// const num = numberGen(7)

// const iterator = {
//     [Symbol.iterator] (n=10){
//         let i=0
//         return{
//             next(){
//                 if (i<n){
//                     return{value: ++i, done:false}
//                 }
//                 return {value: undefined, done: true}
//             }
//         }
//     }
// }


function* iter(n =10){
    for(let i=0; i<n; i++){
        yield i
    }
}

for(let k of iter(6)){
    console.log(k);
}