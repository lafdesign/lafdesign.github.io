angular
  .module('app')
  .controller('workCtrl', ['$scope', function($scope) {
    $scope.title = "Work";
    $scope.items = ['work','about','bespoke',];
    $scope.selectedValue = 'work';

  
  }]);