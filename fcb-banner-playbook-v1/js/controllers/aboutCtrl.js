angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['welcome','rich', 'standard', 'more', 'about'];
    $scope.selectedValue = 'about'; 

  
  }]);