const obj = {
    name: 'ura',
    age: '30',
    job: 'Engeneer'
}

const entries = [
    ['name', 'ura'],
    ['age', 30],
    ['job', 'Engeneer']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map.get('job'))

map
.set('newField', 42)
.set(obj, 'Value of object')
.set(NaN, 'Nan???')

// // console.log(map)
// // console.log(map.get(NaN));
// // map.delete('job')
// console.log(map.has('job'));
// map.clear()
// console.log(map.size)

// for(let [key, value] of map) {
// //     console.log(key, value)

// // }

// for(let val of map.values()){
//     console.log(val);
// }

// for(let key of map.keys()){
//     console.log(key);
// }

// map.forEach ((val,key,m)=>{
//     console.log(val,key);
// })
//===============================================================================

const array = Array.from(map)

const mapObj = Object.fromEntries(map.entries())

console.log(mapObj);

//==========================================================

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Ira'},
]

const visits = new Map()
visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime()+1000*60))
    .set(users[2], new Date(new Date().getTime()+5000*60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))


// var sum = 0
// for(i=4; i<8; i++) {
//     if (i==6){
//         continue
//     }
//     sum += i
// }

// console.log(sum)