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
      
    $locationProvider.html5Mode(true);// use the HTML5 History API -- removes the #
      
  }])

   
