let  screenWidth = screen.width;
let  screenHeight = screen.height;
let menuDisplay = false;
let animationMove = false;
$('#menuButton').bind('touchstart', function() {
    // console.log(menuDisplay,menuDivTop);
    if(!animationMove){
      timer1 = setInterval(menuMove,25);
    }
});
let menuColor = 100;
let menuDivTop = -1*($('.menuDiv').height());
function menuMove(){
  // console.log(menuColor,menuDivTop);
  animationMove = true;
  if(!menuDisplay){
    menuColor -= 10;
    menuDivTop += 100;
    $('.menuDiv').css('top',menuDivTop + 'px');
    let a1 = 27 + (0.73*(100-menuColor));
    $('.menuBer').css('background-color','hsla(193, 68%, ' + a1 +  '%, 0.95)');
    // console.log('background-color','hsla(193, 68%, ' + a1 +  '%, 0.95)');
    $('#menuBer0').css('margin-left',(0.1 * (100 - menuColor)) + 20 + 'px');
    $('#menuBer1').css('margin-left',(120 - menuColor) + 'px');
    $('#menuBer2').css('margin-left',(0.1 * (100 - menuColor)) + 20 + 'px');
    // $('#menuButton').css('border','5px solid hsl(0,0%,' + menuColor + '%)');
    // $('#menuButton').css('background-color','hsl(0,0%,' + (100 - menuColor) + '%)');
    // $('#menuBer1').css('background-color','rgb(256,256,256,' + menuColor + '%)');
    // $('.menuMessage').css('color','rgba(256,256,256,' + (1-(menuColor/100)) + ')');
    document.getElementById('menuBer0').style.WebkitTransform = "rotate(" + (0.48 * (100 - menuColor)) + "deg)";
    document.getElementById('menuBer2').style.WebkitTransform = "rotate(" + (-0.48 * (100 - menuColor)) + "deg)";
    // if(menuDivTop >= -1130){
    //   $('.commentIcon').css('top',menuDivTop + 1250 + 'px');
    // }else{
    //   $('.commentIcon').css('top','170px');
    // }
    // console.log(0.45 * menuColor);
    if(menuDivTop >= 0){
      menuDisplay = true;
      // console.log(menuDisplay,menuDivTop);
      animationMove = false;
      clearInterval(timer1);
    }
  }else{
    menuColor += 10;
    menuDivTop -= 100;
    $('.menuDiv').css('top',menuDivTop + 'px');
    let a = 27 + (0.73*(100 - menuColor));
    $('.menuBer').css('background-color','hsla(193, 68%, ' + a +  '%, 0.95)');
    // console.log('hsla(193, 68%, ' + 27 + (0.73*(100-menuColor)) +  '%, 0.95)',0.73*(100 - menuColor));
    $('#menuBer0').css('margin-left',(0.1 * (120 - menuColor)) + 20 + 'px');
    $('#menuBer1').css('margin-left',(120 - menuColor) + 'px');
    $('#menuBer2').css('margin-left',(0.1 * (120 - menuColor)) + 20 + 'px');
    // $('.menuMessage').css('color','rgba(256,256,256,' + (1-(menuColor/100)) + ')');
    // $('#menuButton').css('border',' 5px solid hsl(0,0%,' + menuColor + '%)');
    // $('#menuButton').css('background-color','hsl(0,0%,' + (100 - menuColor) + '%)');
    document.getElementById('menuBer0').style.WebkitTransform = "rotate(" + (0.48 * (100 - menuColor)) + "deg)";
    document.getElementById('menuBer2').style.WebkitTransform = "rotate(" + (-0.48 * (100 - menuColor)) + "deg)";
    // if(menuDivTop >= -1080){
    //   $('.commentIcon').css('top',menuDivTop + 1250 + 'px');
    // }else{
    //   $('.commentIcon').css('top','170px');
    // }
    if(menuDivTop <= -1*($('.menuDiv').height())){
      menuDisplay = false;
      // console.log(menuDisplay,menuDivTop);
      animationMove = false;
      clearInterval(timer1);
    }
  }
}





function outlineScroll(){
  $("html,body").animate({scrollTop:$('.outline_back_line').offset().top});
}
