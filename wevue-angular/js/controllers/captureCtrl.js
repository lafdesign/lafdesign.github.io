angular
  .module('app')
  .controller('captureCtrl', ['$scope', function($scope) {
    $scope.title = "capture";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'capture';
  }]);