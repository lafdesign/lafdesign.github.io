angular
  .module('standardApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise('/');
    
  
    $stateProvider
    
      .state('leatherboard', {
        url: '/standard/leatherboard',
        templateUrl: 'templates/_standard/leatherboard.html',
        controller: 'aboutCtrl'
      })
      .state('rectangle', {
        url: '/standatd-rectangle',
        templateUrl: 'templates/_standard/rectangle.html',
        controller: 'rectangleCtrl'
      })

  
      .state("otherwise", {
        url : '/standard'
      });
      
      

      
  }])

   