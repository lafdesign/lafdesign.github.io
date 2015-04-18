angular
  .module('app')
  .controller('introCtrl', ['$scope', function($scope) {
    $scope.title = "intro";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'intro';
  }]);
