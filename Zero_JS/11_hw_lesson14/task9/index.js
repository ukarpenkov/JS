function returnEl(id) {
    let elements = document.getElementById(id)
    return elements
}

//find elements
let langLi = returnEl('li-of-lang')
let cityLi = returnEl('li-of-city')
let ulOfLang = document.getElementById('sub-menu-lang')
let ulOfCity = document.getElementById('sub-menu-city')

let showCityMenu = () => {
    ulOfCity.className = 'show'
    ulOfLang.className = 'hide'
    console.log('hello')
}
let showLangMenu = () => {
    ulOfLang.className = 'show'
    ulOfCity.className = 'hide'
    console.log('hello')
}



//events on span click
cityLi.addEventListener('click', showCityMenu)
langLi.addEventListener('click', showLangMenu)