angular
  .module('tildeApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('tilde', {
        url: '/',
        templateUrl: 'app/templates/tilde.html',
        controller: 'tildeCtrl'
      })
      .state('focus', {
        url: '/focus',
        templateUrl: 'app/templates/focus.html',
        controller: 'focusCtrl'
      })
      .state('hover', {
        url: '/hover',
        templateUrl: 'app/templates/hover.html',
        controller: 'hoverCtrl'
      })
      .state('active', {
        url: '/active',
        templateUrl: 'app/templates/active.html',
        controller: 'activeCtrl'
      })
      .state('visited', {
        url: '/visited',
        templateUrl: 'app/templates/visited.html',
        controller: 'visitedCtrl'
      })
      .state('ampersand', {
        url: '/ampersand',
        templateUrl: 'app/templates/ampersand.html',
        controller: 'ampersandCtrl'
      })
  }])

