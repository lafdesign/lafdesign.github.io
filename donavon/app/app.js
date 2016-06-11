angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/bespoke');
    $stateProvider
      .state('work', {
        url: '/work',
        templateUrl: 'app/templates/work.html',
        controller: 'aboutCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('bespoke', {
        url: '/bespoke',
        templateUrl: 'app/templates/bespoke.html',
        controller: 'bespokeCtrl'
      })
  }])