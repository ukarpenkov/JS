const requestUrl = 'https://jsonplaceholder.typicode.com/users'




function sendRequest(method, url, body = null){
    const headers ={
        'Conent-Type': 'application/json'
    }
   return fetch(url, {
       method: method,
       body: JSON.stringify(body),
       headers: headers
   }).then(response => {
       if(response.ok){
        return response.json()
       }else{
           return response.json().then(error=>{
               const e = new Error('Что-то не так!')
               e.data = error
               throw e
           })
       }   
   })
    }
sendRequest('POST', requestUrl, body = {
    name: 'ura',
    age: 26
})
    .then(data => console.log(data))
    .catch(err=> console.log(err))