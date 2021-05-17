function getScrollPosition() {
var obj = new Object();
obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
obj.y = document.documentElement.scrollTop || document.body.scrollTop;
return obj;
}

document.onscroll = function moveScroll(){
  let scroll_position = getScrollPosition();
  console.log(scroll_position.y / 910);
  if((scroll_position / 910) >= 1){
    $('.header').css("opacity" ,"1");
  }else{
    $('.header').css("opacity" ,scroll_position.y / 910);
  }
}
