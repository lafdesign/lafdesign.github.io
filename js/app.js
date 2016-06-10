angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
         


      $urlRouterProvider.otherwise('/');
    
  
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'templates/portfolio.html',
        controller: 'portfolioCtrl'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'templates/resume.html',
        controller: 'resumeCtrl'
      })
       .state('svg', {
        url: '/svg',
        templateUrl: 'templates/svg.html',
        controller: 'svgCtrl'
      })
      .state("otherwise", {
        url : '/'
      });
      
      if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
                 enabled: true,
                 requireBase: false
          });
        }

      
  }])

   
