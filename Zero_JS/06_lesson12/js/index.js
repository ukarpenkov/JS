// function alertFirstNameValues (){
//   console.log(firstNameEl.value);
//   console.log(firstNameEl.className);
// }
// function alertLastNameValues (){
//   console.log(lastNameEl.value);
//   console.log(lastNameEl.className);
// }
// function alertAddressValue(){
//   console.log(address.value);
//   console.log(address.className);
// }
// function alertHobbyValues(){
//   console.log(myHobby.value);
//   console.log(myHobby.className);
// }

function alertValues(el){
  console.log(el.value);
  console.log(el.className);
}

function haha (ch){
  ch.innerHTML = 'haha'
}

var firstNameEl = document.getElementById("first-name");

var lastNameEl = document.getElementById("last-name");
alertValues(lastNameEl)
var address = document.getElementById("address");

var cityChoose = document.getElementById("city");
var cityMsk = document.getElementById("msk");
var myHobby = document.getElementById("hobby");
alertValues(myHobby)
var pic = document.getElementById("pic");
let mullen = document.getElementById("mullen");
firstNameEl.value = "URAAAAAAAAAAAAA";
alertValues(firstNameEl)
lastNameEl.className = "last-name-input default-input error-input";
lastNameEl.title = "WRONG!!!!!!!!!!!";

mullen.src =
  "data:image/jpeg;base64,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";
mullen.title = "YYYYYYYYYYYYYY";
city.value = "minsk";
myHobby.value = "GGGGGGGGGGGGGGGG";
alertValues(myHobby)
pic.innerHTML = '<textarea id=list></textarea>'
let list = document.getElementById('list')
list.value = 'fffffffffff'
alertValues(lastNameEl)
alertValues(lastNameEl)
alertValues(lastNameEl)
alertValues(lastNameEl)
alertValues(lastNameEl)
// let wrapper = document.getElementById('wrapper')
// haha(wrapper) прикол взлом