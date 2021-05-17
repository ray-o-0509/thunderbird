setStyle();
let number = 0;
function setStyle(){
  timer1 = setInterval(move,50);
}

function move(){
  // console.log(number);
  $('.selectBer').css('top', (($('.titlePicture').height() - 160) * number) + 'px');
  $('.selectBer').css('opacity', number);
  if(number > 0.99){
    clearInterval(timer1);
  }else{
    number += 0.1;
  }
}


function moveLocation(num){
  // alert("a");
  if(num === "member"){
    $("html,body").animate({scrollTop:$('.airplaneImage').offset().top});
  }else if(num === "team"){
    $("html,body").animate({scrollTop:$('.everuoneBackImage').offset().top});
  }
}


// 1hZa_FY1ZtaAiL3ThD2dfFNr0Iqs0MDEVOuHM5s4x-V8



const member = [
['http://drive.google.com/uc?export=view&id=1qbqK1pii1DE3TNpA4ghoCrP0ijZuN45w','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文'],
['imgeURL','紹介文']
];

function clickPhoto(num){
  if(num != "close"){
    $('.showMember').css('display','inline');
    $('.profilePicture').attr('src',member[num][0].replace("https://drive.google.com/open?", "http://drive.google.com/uc?export=view&"));
    $('.showProfile').html(member[num][1]);
  }else{
    $('.showMember').css('display','none');
  }
}
