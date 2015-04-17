angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('intro', {
        url: '/',
        templateUrl: 'templates/intro.html',
        controller: 'introCtrl'
      })
      .state('team', {
        url: '/team',
        templateUrl: 'templates/team.html',
        controller: 'teamCtrl'
      })
      .state('our-story', {
        url: '/our-story',
        templateUrl: 'templates/our-story.html',
        controller: 'our-storyCtrl'
      })
      .state('capture', {
        url: '/capture',
        templateUrl: 'templates/capture.html',
        controller: 'captureCtrl'
      })
      .state('promote', {
        url: '/promote',
        templateUrl: 'templates/promote.html',
        controller: 'promoteCtrl'
      })
      .state('enhance', {
        url: '/enhance',
        templateUrl: 'templates/enhance.html',
        controller: 'enhanceCtrl'
      });
  }]);

  .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoTop = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };
  }]);