const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
  Moscow: 20,
  SaintPetersburg: 8,
  Kazan: 5,
  Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
  }

// Spread

// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia,'Wash DC', ...citiesEurope]

// const allCities = citiesEurope.concat(citiesRussia)
// console.log(allCities);

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})

//Praktika

// const numbers = [6,37,42,17]
// console.log(Math.max(6,37,42,17))
// console.log(Math.max(...numbers));

// const divs = document.querySelectorAll('div')

// const nodes = [...divs]
// console.log(divs, Array.isArray(divs));

///////////Rest   ... у сум это рест

function sum(a,b, ...rest){
    return a+b+ rest.reduce((a,i)=> a+i,0)
}
const numbers = [1,2,3,4,5,7,8,900]

// its spread
// console.log(sum(...numbers))

// const a = numbers[0]
// const b = numbers[1]


// const [a,b, ...other] = numbers

// console.log(a,b, other);

const person = {
    name: 'max',
    age: 20,
    city: "spb"
}

const {name, age, ...adr}=person

console.log(name,age,adr);