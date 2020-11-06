function calc (a,b){
    return [
        a+b,
        a-b,
        a*b,
        a/b
    ]
}
const [sum,sub= 'вычитание нет', mult, ...other]=  calc(42,10)
// const sum = result[0]
// const minus = result[1]

// const [sum, minus] = result

console.log(sum,mult, other, sub);


const person = {
    // name: 'max',
    age: 20,
    adress: {
        country: 'RU',
        city: 'SPB'
    }

}

const {
    name:firstName = 'ЮЮЮРА',
     age, 
     car ='logan',
     adress: {city, country}
 } = person

console.log(firstName, age, car, city, country)