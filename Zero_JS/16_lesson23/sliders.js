function Slider() {
    this.imgsUrls = []
    this.currentImageIndex = 0
    this.buttonLeft = null // document.querySelector('.show-prew-button'),
    this.buttonRight = null // document.querySelector('.show-next-button'),
    this.slideImage = null // document.querySelector('.slide-img'),
    this.start = function (elId) {
        let that = this //теперь тхет это слидер1 если так не сделать, то тхиз будет кнопкой а не слацдером - работать не будет
        //subsribe to evets
        let elSelector = '#' + elId
        let el = document.querySelector(elSelector)

        this.buttonLeft = el.querySelector('.show-prew-btn')
        this.buttonRight = el.querySelector('.show-next-btn')
        this.slideImage = el.querySelector('.slide-img')


        this.buttonLeft.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e)
        })
        this.buttonRight.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e)
        })

        //update images array
        this.imgsUrls.push('https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg')
        this.imgsUrls.push('https://static5.depositphotos.com/1003372/527/i/450/depositphotos_5275356-stock-photo-beach-and-tropical-sea.jpg')
        this.imgsUrls.push('https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_795/https://nicko.ru/wp-content/uploads/2019/03/dsc04524_%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80.jpg')
        this.imgsUrls.push('https://saletur.ru/galery/tfoto/big/105/77/1057716.jpg')


        this.slideImage.src = this.imgsUrls[this.currentImageIndex]
        this.buttonLeft.disabled = true
    }
    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--
        this.slideImage.src = this.imgsUrls[this.currentImageIndex]
        this.buttonRight.disabled = false
        //disable button if need
        if (this.currentImageIndex === (0)) {
            this.buttonLeft.disabled = true
        }
    }
    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++
        this.slideImage.src = this.imgsUrls[this.currentImageIndex]
        this.buttonLeft.disabled = false
        //disable button if need
        if (this.currentImageIndex === (this.imgsUrls.length - 1)) {
            this.buttonRight.disabled = true
        }
    }
}

