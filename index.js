

element=document.getElementById('play');
pause= document.getElementById('pause');

celebrate= document.getElementById('celebrate');
dance=document.getElementById('dance');
cake=document.getElementById('cake');
message=document.getElementById('message');
gift= document.getElementById('gift');

var audio = new Audio('song.mp3');




element.addEventListener("click", function()
{
   audio.play();
  $("#curtain1").attr("src", "party.gif");
  $("#curtain2").attr("src","vasu.jpeg");
$("body").css('background-image','url(disco.gif)');
  $("#play").hide();
  $("#celebrate").show();
});

pause.addEventListener("click", function()
{
  audio.pause();
  $("body").css('background-image','url(blak.jpg)');
  $("#pause").hide();
    $("#play").show();
});



celebrate.addEventListener("click", function()
{
  $("#curtain2").attr("src", "start.gif");
    $("#curtain1").attr("src","vasu.jpeg");

  $("#celebrate").hide();
    $("#dance").show();
});

dance.addEventListener("click",function()
{

    $("#curtain1").attr("src", "dance.gif");
      $("#curtain2").attr("src","vasu.jpeg");
    $("#dance").hide();
      $("#cake").show();
});


cake.addEventListener("click",function()
{

    $("#curtain2").attr("src", "cake.gif");
      $("#curtain1").attr("src","vasu.jpeg");

    $("#cake").hide();
      $("#gift").show();
});

gift.addEventListener("click",function()
{
    $("#curtain1").attr("src", "party.gif");
      $("#curtain2").attr("src","vasu.jpeg");
    $("#gift").hide();
      $("#message").show();

});

message.addEventListener("click",function()
{
    $("#curtain2").attr("src", "wish.gif");
      $("#curtain1").attr("src","vasu.jpeg");
    $("#message").hide();
      $("#pause").show();
});


cur1= document.getElementById('cur1');
cur2= document.getElementById('cur2');
  cur1.addEventListener("click", function()
{
 $("#curtain1").animate({width:20},1000);
 $("#curtain2").animate({width:20},1000);


   $("#cur1").hide();
   $("#cur2").show();
});

cur2.addEventListener("click",function close_curtain()
{
 $("#curtain1").animate({width:300},1000);
 $("#curtain2").animate({width:300},1000);
 $("#play").show();
 $("#cur2").hide();
});
