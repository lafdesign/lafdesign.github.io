angular
  .module('app')
  .controller('moreCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['welcome','rich', 'standard', 'more', 'about'];
    $scope.selectedValue = 'more'; 

  
  }]);