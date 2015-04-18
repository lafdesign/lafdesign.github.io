angular
  .module('app')
  .controller('our-storyCtrl', ['$scope', function($scope) {
    $scope.title = "our-story";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'our-story';
  }]);