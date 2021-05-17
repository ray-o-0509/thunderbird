setStyle();
function setStyle(){
  let blogData = JSON.parse(localStorage.getItem('blogData'));
  let articleNo = localStorage.getItem('articleNo');
  console.log(blogData[articleNo][13]);
  $('.articleBody').append('<img src="' + blogData[articleNo][3] + '" class="blogTopImage"><br><p class="title">【' + blogData[articleNo][0] + '】' + blogData[articleNo][1] + '<p><p class="blogTag_article" onclick="jumpTag(' + "'" + blogData[articleNo][13] + "'" + ')">#' + blogData[articleNo][13] + '</p><p class="article_article">' + blogData[articleNo][2].replace('<span>', '<span style="font-weight: 900;">') + '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>');
}

function jumpTag(num){
  console.log(num);
  localStorage.setItem('jump', true);
  if(num === "パイロット"){
    localStorage.setItem('article_no_to_blog', 1);
  }else if(num === "リスク管理"){
    localStorage.setItem('article_no_to_blog', 2);
  }else if(num === "設計・電装"){
    localStorage.setItem('article_no_to_blog', 3);
  }else if(num === "広報"){
    localStorage.setItem('article_no_to_blog', 4);
  }else if(num === "大会関係"){
    localStorage.setItem('article_no_to_blog', 5);
  }
  location.href = 'blog.html';
}
