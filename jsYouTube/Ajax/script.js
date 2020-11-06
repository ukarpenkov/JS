let xhttp = new XMLHttpRequest()
let a = 0
xhttp.onreadystatechange = function(){
   if (this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
   }
}

xhttp.open("GET", "https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest", true)
xhttp.send()

function myFunction(data) {
    a = data
    console.log(data)
}



let xhttp2 = new XMLHttpRequest()
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        myFunction2(this.responseText)
    }
}

xhttp2.open("POST", "https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest", true)


xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhttp2.send('auth=zzzzz=1')
function myFunction2(data) {
    console.log('Post')
    a = data
    console.log(data)
}
