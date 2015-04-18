angular
  .module('app')
  .controller('enhanceCtrl', ['$scope', function($scope) {
    $scope.title = "enhance";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'enhance';
  }]);