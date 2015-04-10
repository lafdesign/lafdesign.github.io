angular
  .module('app')
  .controller('promoteCtrl', ['$scope', function($scope) {
    $scope.title = "promote";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'promote';

  
  }]);