car1.start()



function returnElById(elementId) {
  let element = document.getElementById(elementId)
  return element
}
//create images array
let imgsUrls = []
//find elements
let buttonLeft = returnElById('button-left')
let buttonRight = returnElById('button-right')
let slideImage = returnElById('slide-img')
let currentImageIndex = 0


//subsribe to evets
buttonLeft.addEventListener('click', onShowPrevBtnClick)
buttonRight.addEventListener('click', onShowNextBtnClick)

//update images array
imgsUrls.push('https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg')
imgsUrls.push('https://static5.depositphotos.com/1003372/527/i/450/depositphotos_5275356-stock-photo-beach-and-tropical-sea.jpg')
imgsUrls.push('https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_795/https://nicko.ru/wp-content/uploads/2019/03/dsc04524_%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80.jpg')
imgsUrls.push('https://saletur.ru/galery/tfoto/big/105/77/1057716.jpg')


slideImage.src = imgsUrls[currentImageIndex]
buttonLeft.disabled = true

//functions definitions
function onShowPrevBtnClick(e) {
  currentImageIndex--
  slideImage.src = imgsUrls[currentImageIndex]
  buttonRight.disabled = false
  //disable button if need
  if (currentImageIndex === (0)) {
    buttonLeft.disabled = true
  }
}
function onShowNextBtnClick(e) {
  currentImageIndex++
  slideImage.src = imgsUrls[currentImageIndex]
  buttonLeft.disabled = false
  //disable button if need
  if (currentImageIndex === (imgsUrls.length - 1)) {
    buttonRight.disabled = true
  }
}





