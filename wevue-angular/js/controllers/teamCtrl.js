angular
  .module('app')
  .controller('teamCtrl', ['$scope', function($scope) {
    $scope.title = "team";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'team';
  }]);