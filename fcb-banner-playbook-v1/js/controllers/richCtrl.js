angular
  .module('app')
  .controller('richCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['welcome','rich', 'standard', 'more', 'about'];
    $scope.selectedValue = 'rich'; 

  
  }]);