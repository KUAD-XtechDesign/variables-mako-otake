$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("ここになにか入れたい文章など");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>追加</p>");
  })

  //ここからjavascriptの話

  let txt1 = "秋深し ";
  let txt2 = "酔どれ君と ";
  let txt3 = "未明まで";
  
  let num1 = 100;
  let num2 = 50;
  let num3 = 50;

  $("#button04").on("click",function(){
    $("#content").text(txt1 + txt2 + txt3);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2);
  })
  

});