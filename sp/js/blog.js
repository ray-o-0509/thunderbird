function finishRoad(){
  const blogData = JSON.parse(localStorage.getItem("blogData"));
}


for (var i = 0; i < 6; i++) {
  $('#blogTypeText' + i).css('top', $('.airplain_scroll').height()/2 + 800/5.7*i + 'px');
}

$(function(){
  //画面サイズ変更時に呼ばれる
  $(window).resize(function(){
    for (var i = 0; i < 6; i++) {
      $('#blogTypeText' + i).css('top', $('.airplain_scroll').height()/2 + 800/5.7*i + 'px');
    }
  });
});

function scrollCategory(num){
  if(num === "in"){
    timer1 = setInterval(move,50);
    alert('on');
  }else{
    clearTimeout(timer1);
    alert('out');
  }
}
function move(){
  console.log(event.y);
}

// document.onmousemove() = function mouse(){
//
// }



let blogTabScroll = 0;
(function(){

    //要素の取得
    var elements = document.getElementsByClassName("airplain_scroll");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    // var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
    }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        // x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        console.log(event.pageY - y + "px");
        if(0 < (event.pageY - y)){
          if((event.pageY - y) < 750){
            drag.style.top = event.pageY - y + "px";
            $('.blogTab').scrollTop((event.pageY - y)/750 * 4660);
            blogTabScroll = (event.pageY - y)/750 * 4660;
          }else{
            drag.style.top = "750px";
          }
        }else{
          drag.style.top = "0px";
        }
        // drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
      if(blogTabScroll < 400){
        console.log('0pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', '0px');
        $('.blogTab').animate({
            scrollTop: 0
        }, 500);
      }else if(blogTabScroll >= 400 && blogTabScroll < 1200){
        console.log('400pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', 800/5.7 + 'px');
        $('.blogTab').animate({
            scrollTop: 800
        }, 500);
      }else if(blogTabScroll >= 1200 && blogTabScroll < 2000){
        console.log('1200pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', 1600/5.7 + 'px');
        $('.blogTab').animate({
            scrollTop: 1600
        }, 500);
      }else if(blogTabScroll >= 2000 && blogTabScroll < 2800){
        console.log('2000pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', 2400/5.7 + 'px');
        $('.blogTab').animate({
            scrollTop: 2400
        }, 500);
      }else if(blogTabScroll >= 2800 && blogTabScroll < 3600){
        console.log('2800pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', 3200/5.7 + 'px');
        $('.blogTab').animate({
            scrollTop: 3200
        }, 500);
      }else if(blogTabScroll >= 3600){
        console.log('3600pxに戻る:' + blogTabScroll);
        $('.airplain_scroll').css('top', 4000/5.7 + 'px');
        $('.blogTab').animate({
            scrollTop: 4000
        }, 500);
      }
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");

    }

})()





$(function() {

  // スクロールしたら発動
  $('.blogTab').scroll(function() {

    // スクロール量を変数に格納
    var sc = $(this).scrollTop();
    // console.log(sc);
  });
});


function setTag(num){
  if(num == 0 || num == 1 || num == 2 || num == 3 || num == 4 || num == 5){
    $('#blogUl0').css('display', 'none');
    $('#blogUl1').css('display', 'none');
    $('#blogUl2').css('display', 'none');
    $('#blogUl3').css('display', 'none');
    $('#blogUl4').css('display', 'none');
    $('#blogUl5').css('display', 'none');
    $('#blogUl' + num).css('display', 'block');
  }
}
let a = localStorage.getItem('jump');
let b = localStorage.getItem('article_no_to_blog');
function setCheck(){
  localStorage.setItem('article_no_to_blog', 0);
  setTag(b);
}
function clickArticle(num){
  localStorage.setItem('articleNo', num);
  location.href = 'article.html';
}

$('[name=alphabet]').change(function() {
    // 選択されているvalue属性値を取り出す
    var val = $('[name=alphabet]').val();
    console.log(val); // 出力：ABC
    setArticles(val);
});


function setArticles(num){
  console.log(111);
  switch(num) {
    case 'Choice 1':
        setTag(1);
        break;
    case 'Choice 2':
        setTag(2);
        break;
    case 'Choice 3':
        setTag(3);
        break;
    case 'Choice 4':
        setTag(4);
        break;
    case 'Choice 5':
        setTag(5);
        break;
    case 'Choice 6':
        setTag(6);
        break;
  }
}
