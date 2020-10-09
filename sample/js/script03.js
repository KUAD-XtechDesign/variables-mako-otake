$(function(){
  //
  let test_array = [30,20,"テキストだって入れられる"," 大吉　","200"];
  
  
  $("#button01").on("click",function(){
    $("#content").text(test_array[0]);
  })

  $("#button02").on("click",function(){
    $("#content").text(test_array[2]);
  })

  $("#button03").on("click",function(){
    $("#content").text(Math.random())*10;
  })

  $("#button04").on("click",function(){
    let random_num = Math.random() * 100;
    $("#content").text(Math.floor(random_num));
  })

  $("#button05").on("click",function(){
    let random_num = Math.random() * 6;
    let random_floor_num = Math.floor(random_num);
    $("#content").text(test_array[random_floor_num]);
  })



});