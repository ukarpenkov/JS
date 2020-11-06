$('document').ready(function(){
  let zn1;
  //zn1 = confirm('удалить все?');
  let weather = 'дождь';
  let time = 'ночь';
  if ((weather == 'слонечно' || weather =='слонено') && time == 'день') {
    alert('отлчно!');
  } else if (weather == 'дождь' && time != 'ночь') {
    alert('ехать с зонтом!');
  }else{
    if(time == 'день'){
      alert('не едь пидоп'+' сейчас ведь '+ weather);
    } else{
      alert ('Какой нахер пикинк ночь же');
    }
  }
});
