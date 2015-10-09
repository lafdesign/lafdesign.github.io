var winW = "", 
    winH = "";
    mobileB = 767, 
    isMobile = false,
    slideIndex = 0;

$(document).ready(function() {
  
  updateView();
  resizeEvents();


  // Animate Nav
  $("nav a").click(function() {
    slideIndex = $(this).index();
    
    // Nav States
    $("nav a").removeClass("active");
    $(".header-nav a").eq(slideIndex).addClass("active");
    $(".footer-nav a").eq(slideIndex).addClass("active");
    
    // Animate Left/Right
    slideMove = slideW * slideIndex;
    slideMove = slideMove * -1;
    $("#slide-wrapper").stop().animate({marginLeft: slideMove});
    
    // Adjust Height
    currentHeight = $(".slide").eq(slideIndex).height() + 40;
    $("#slides").animate({height: currentHeight});
    
    return false;
  });
  
  
  // Modals
  $(".fancybox").fancybox();
  
});


function adjustSizes(){
  
}


/* Update Values */
function updateView(){
  slideW = $(".grid").width();
  $(".slide").width(slideW);
  $("#slide-wrapper").width(slideW*5);
  
  winW = $(window).width();
  winH = $(window).height(); 
  
  // Update Height
  currentHeight = $(".slide").eq(slideIndex).height() + 40;
  $("#slides").animate({height: currentHeight});
  
  if (typeof slideIndex !== 'undefined'){
    slideMove = slideW * slideIndex;
    slideMove = slideMove * -1;
    $("#slide-wrapper").stop().animate({marginLeft: slideMove});
  }
  
}


function resizeEvents(){
  
  /* Window Reize on End Event */
  $(window).bind('resize', function(e){
    window.resizeEvt;
    $(window).resize(function(){
      clearTimeout(window.resizeEvt);
      window.resizeEvt = setTimeout(function(){
        //Code to be executed after window resize
        updateView();
      }, 250);
    });
  });  
  
  /* Touch Based Events */
  if (Modernizr.touch){
    window.addEventListener("orientationchange", function() {
      updateView();
    }, false);  
  }
  
}

