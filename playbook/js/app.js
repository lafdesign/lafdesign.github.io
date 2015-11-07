angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise('/');
    
  
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'templates/welcome.html',
        controller: 'welcomeCtrl'
      })
      .state('rich', {
        url: '/rich-media',
        templateUrl: 'templates/rich.html',
        controller: 'richCtrl'
      })
      .state('standard', {
        url: '/standard',
        templateUrl: 'templates/standard.html',
        controller: 'standardCtrl'
      })
      .state('more', {
        url: '/more',
        templateUrl: 'templates/more.html',
        controller: 'moreCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })
 
  
      .state("otherwise", {
        url : '/'
      });
      
      

      
  }])

   