$(document).ready(function() {
  $(".link").on("click", function(e) {
    e.preventDefault();
    if(this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function() {
        window.location.hash = hash;
      });
    }
  });

});

var happyColor = ["linear-gradient( rgba(184, 42, 193, 0.76), rgba(41, 56, 99, 0.5)) fixed" , 
"linear-gradient(rgba(245, 195, 15, 0.87), rgba(158, 7, 29, 0.74)) fixed" ,
"linear-gradient( rgba(230, 167, 51, 0.76), rgba(157, 15, 204, 0.95)) fixed"] 

var sadColor = ["linear-gradient( rgba(51, 197, 230, 0.76), rgba(15, 204, 117, 0.95)) fixed",
"linear-gradient( rgb(29, 154, 167), rgba(184, 204, 15, 0.67)) fixed", 
"linear-gradient( rgba(58, 36, 62, 0.78), rgba(24, 97, 119, 0.49)) fixed"];

var angryColor = ["linear-gradient( rgba(232, 31, 10, 0.78), rgba(119, 99, 24, 0.49)) fixed",
"linear-gradient( rgba(232, 123, 10, 0.78), rgba(228, 13, 13, 0.95)) fixed",
"linear-gradient( rgba(85, 10, 232, 0.78), rgba(228, 13, 13, 0.95)) fixed"];

$('#map').fadeOut(1000);
/*
$(document).ready(function(){
    $("#happy").click(function(){
        $("#map").animate({width: "900px"});
    });
    */


    document.getElementById('happy').addEventListener("click" , function(){
   // $('body').css(["background: linear-gradient(happyColor[Math.floor(Math.random() * 3)])"])
    //document.body.style.background = happyColor[Math.floor(Math.random() * 3)];
    $('#map').fadeIn(4000);
    document.getElementById('status').innerText = "Glad to see you happy!... have a look at the marked places on map that suits your current mood :)";
    document.getElementById('happy').style.border = "3px solid #ad7213";
    $("#map").animate({width: "80%"});
    setInterval(function(){
      var randomColor = happyColor[Math.floor(Math.random() * 3)];
      document.body.style.background = randomColor;
    }, 3000);

  })

/*
$('#happy').click(function(){
    $("html, body").animate({ backgroundColor: "red" }, 4000);
});
*/
document.getElementById('sad').addEventListener("click" , function(){
 setInterval(function(){
  var randomColor = sadColor[Math.floor(Math.random() * 3)];
  document.body.style.background = randomColor;}, 3000);
     //$('#map').fadeOut(1000);
     //document.body.style.background = sadColor[Math.floor(Math.random() * 3)];
     $('#map').fadeIn(4000);
     document.getElementById('status').innerText = "Hey cheer up!... pick one cafe or theatre from the map and spend some time with your friends to lighten up your mood :)";
     document.getElementById('sad').style.border = "3px solid #518e81";
     $("#map").animate({width: "80%"});
     
   })

document.getElementById('angry').addEventListener("click" , function(){
 setInterval(function(){
   var randomColor = angryColor[Math.floor(Math.random() * 3)];
   document.body.style.background = randomColor;
 }, 3000);
   //  document.body.style.background = angryColor[Math.floor(Math.random() * 3)];
   $('#map').fadeIn(4000);
   document.getElementById('status').innerText = "For every minute you're angry you loose sixty seconds of happiness ~ Ralph Emerson ";
   document.getElementById('angry').style.border = "3px solid #70153e";
   $("#map").animate({width: "80%"});
 })



