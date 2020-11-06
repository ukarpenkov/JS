

var thumbnails = document.querySelectorAll('.thumbnails img');
var fullSizeImg = document.getElementById('full-size-img');
var showFullSizeImage1 = function () {
    fullSizeImg.src = 'https://sun9-69.userapi.com/impf/c824201/v824201969/17341f/IfCwbiGRL7c.jpg?size=200x0&quality=90&crop=0,0,500,588&sign=9b4d43be2be378401d5bec41a9c5d5b3&ava=1'
}
var showFullSizeImage2 = function () {
    fullSizeImg.src = 'https://proprikol.ru/wp-content/uploads/2020/02/skachat-krasivye-kartinki-na-telefon-besplatno-2.jpg'
}
var showFullSizeImage3 = function () {
    fullSizeImg.src = 'https://klike.net/uploads/posts/2019-06/1560664221_1.jpg'
}




for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[0].addEventListener('click', showFullSizeImage1);
    thumbnails[1].addEventListener('click', showFullSizeImage2);
    thumbnails[2].addEventListener('click', showFullSizeImage3);
}