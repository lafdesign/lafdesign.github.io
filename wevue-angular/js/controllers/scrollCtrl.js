angular
  .module('app')
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