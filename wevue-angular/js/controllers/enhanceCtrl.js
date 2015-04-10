angular
  .module('app')
  .controller('enhancesCtrl', ['$scope', function($scope) {
    $scope.title = "enhances";
    $scope.items = ['intro','team','our-story','capture','promote','enhance'];
    $scope.selectedValue = 'enhances';

  
  }]);