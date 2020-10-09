$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").hide();
  })

  $("#button02").on("click",function(){
    $("#content").show();
  })

  $("#button03").on("click",function(){
    $("#content").toggle();
  })

  $("#button04").on("click",function(){
    $("#content").fadeOut();
  })

  $("#button05").on("click",function(){
    $("#content").fadeIn();
  })

  $("#button06").on("click",function(){
    $("#content").fadeToggle();
  })

  $("#button07").on("click",function(){
    $("#content").slideUp();
  })

  $("#button08").on("click",function(){
    $("#content").slideDown();
  })

  $("#button09").on("click",function(){
    $("#content").slideToggle();
  })


});