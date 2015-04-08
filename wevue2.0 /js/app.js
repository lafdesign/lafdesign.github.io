// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// fade in quotes page 1
(function() {
            var quotes = $(".quotes");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(2000)
                    .delay(1000)
                    .fadeOut(2000, showNextQuote);
            }
            showNextQuote();
        })();

// slide control on phones 
(function() {
            var quotes = $(".branding-img");
            var quoteIndex = -1;
            function showNextQuote() {
                ++quoteIndex;
                quotes.eq(quoteIndex % quotes.length)
                    .fadeIn(1000)
                    .delay(4300)
                    .fadeOut(2000, showNextQuote);
            }
            showNextQuote();
        })();


// activates animate.css classes on scroll 
onScrollInit( $('.os-animation') );


function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '90%'
    });
  });
}

// activates animate.css classes on scroll 

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


// click events with form submission
$('#submit').on('click', function() {
            $('#form').addClass('animated flipOutY');
        });
$('#submit').on('click', function() {
            $('#Name').addClass('animated flipOutX');
        });
$('#submit').on('click', function() {
            $('#Email').addClass('animated flipOutX');
        });
$('#submit').on('click', function() {
            $('#Number').addClass('animated toBeAnimatedFast flipOutX');
        });
$('#submit').on('click', function() {
            $('#success').addClass('  success-display animated fadeIn ');
        });
$('#submit').on('click', function() {
            $('#fade-success').addClass('animated fadeOut');
        });


// activates button in form  


$(function(){
     $('#Email').keyup(function(){
          if ($(this).val() == '') { //Check to see if there is any text entered
               //If there is no text within the input then disable the button
               $('.enable').prop('disabled', true);
          } else {
               //If there is text in the input, then enable the button
               $('.enable').prop('disabled', false);
          }
     });
});