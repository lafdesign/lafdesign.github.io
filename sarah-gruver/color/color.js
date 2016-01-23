window.newRed = "128";
window.newGreen = "128";
window.newBlue = "128";


// Get Red
$("#red").mousemove(function(e){
  window.newRed = $(this).val();
  $('.red').text(newRed);
});

// Get Green
$("#green").mousemove(function(e){
  window.newGreen = $(this).val();
  $('.green').text(newGreen);
});

// Get Blue
$("#blue").mousemove(function(e){
  window.newBlue = $(this).val();
  $('.blue').text(newBlue);
});

$(document).mousemove(function(){
  var Red = window.newRed;
  var Green = window.newGreen;
  var Blue = window.newBlue;
  window.newColour = "rgb(" + Red + "," + Green + "," + Blue + ")";
  
  $('.text p').css("color", window.newColour);
  $('.text p span').css("color", window.newColour).text(window.newColour);
  $('.color-box').css("background", window.newColour);
});

$('#body-bg').click(function(){
  $(this).css("background", window.newColour);
  $('body').css("background", window.newColour);
});



// iPhone jQuery
$('#red').bind('touchmove', function(event) {
  window.newRed = $(this).val();
  $('.red').text(newRed);
});

$('#green').bind('touchmove', function(event) {
  window.newGreen = $(this).val();
  $('.green').text(newGreen);
});

$('#blue').bind('touchmove', function(event) {
  window.newBlue = $(this).val();
  $('.blue').text(newBlue);
});

$(document).bind('touchmove', function(event) {
  var Red = window.newRed;
  var Green = window.newGreen;
  var Blue = window.newBlue;
  window.newColour = "rgb(" + Red + "," + Green + "," + Blue + ")";
  
  $('.text p').css("color", window.newColour);
  $('.text p span').css("color", window.newColour).text(window.newColour);
  $('.color-box').css("background", window.newColour);
});

$('#body-bg').click(function(){
  $(this).css("background", window.newColour);
  $('body').css("background", window.newColour);
});