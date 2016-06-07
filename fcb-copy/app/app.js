'use strict';
(function () {
angular
  .module('app', [
    'ui.router' 
  ])


  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
         
    $locationProvider.html5Mode(true);// use the HTML5 History API -- removes the #
    $urlRouterProvider.otherwise('/work');
    $stateProvider
      .state('work', {
        url: '/work',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/work.html',
        controller: 'workCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/news.html',
        controller: 'newsCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/contact.html',
        controller: 'contactCtrl'
      })

      // people pages off about page 
      .state('ari-halper', {
        url: '/ari-halper',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/people/ari-halper.html',
        controller: 'ariHalperCtrl'
      })
      .state('deb-freeman', {
        url: '/deb-freeman',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/people/deb-freeman.html',
        controller: 'debFreemanCtrl'
      })
      .state('karyn-rockwell', {
        url: '/karyn-rockwell',
        templateUrl: 'http://laf.land/fcb-copy/app/templates/people/karyn-rockwell.html',
        controller: 'karynRockwellCtrl'
      })
      // work exaqmple pages
     .state('SeaWorld', {
          url: '/SeaWorld-Meet-the-Animals-casestudy-video.html',
          templateUrl: 'http://laf.land/fcb-copuapp/templates/portfolio/SeaWorld.html',
          controller: 'SeaWorldCtrl'
        })

     .state('Lincoln', {
          url: '/Lincoln-Financial-Precious-TV',
          templateUrl: 'app/templates/portfolio/Lincoln-Financial.html',
          controller: 'LincolnCtrl'
      })

     .state('Tumblr', {
          url: '/FDA-Tumblr-casestudy-video',
          templateUrl: 'app/templates/portfolio/FDA-Tumblr.html',
          controller: 'TumblrCtrl'
        })

     .state('Contract', {
          url: '/FDA-Contract-TV',
          templateUrl: 'app/templates/portfolio/FDA-Contract.html',
          controller: 'ContractCtrl'
        })

     .state('Creatures', {
          url: '/FDA-Creatures-casestudy-video',
          templateUrl: 'app/templates/portfolio/FDA-Creatures.html',
          controller: 'CreaturesCtrl'
        })

     .state('Smoke', {
          url: '/FDA-Smoke-Army-TV',
          templateUrl: 'app/templates/portfolio/FDA-Smoke.html',
          controller: 'SmokeCtrl'
        })

     .state('Mpower', {
          url: '/Mpower-Video',
          templateUrl: 'app/templates/portfolio/Mpower.html',
          controller: 'mPowerCtrl'
        })

     .state('Jamaica', {
          url: '/Jamaica-Bobsled-Song-casestudy-video',
          templateUrl: 'app/templates/portfolio/Jamaica.html',
          controller: 'jamaicaCtrl'
        })

     .state('oreo', {
          url: '/OREO-Daily-Twist-video',
          templateUrl: 'app/templates/portfolio/Oreo.html',
          controller: 'oreoCtrl'
        })

     .state('fig', {
          url: '/Fig-Newtons-print',
          templateUrl: 'app/templates/portfolio/Fig.html',
          controller: 'figCtrl'
        })

     .state('buschGarden', {
          url: '/Busch-Garden',
          templateUrl: 'app/templates/portfolio/busch-garden.html',
          controller: 'buschGardenCtrl'
        })




   


    }])

      var appFactory = angular.module('app');   // load jQuery attached to the window object
      appFactory.factory('jQuery', [
        '$window',
        function ($window) {
            return $window.jQuery;
        }
    ]);

// //add drag content mouse functionality
//     var curYPos = 0,
//         curXPos = 0,
//         curDown = false;

//     window.addEventListener('mousemove', function(e){ 
//       if(curDown === true){
//         window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
//       }
//     });

//     window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
//     window.addEventListener('mouseup', function(e){ curDown = false; });




})();

// add active state for the nav
function HeaderController($scope, $location) { 
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
}



// document.title = $("<img>").html(document.title).text();

//Mobile menu - close upon navigating to new page
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})