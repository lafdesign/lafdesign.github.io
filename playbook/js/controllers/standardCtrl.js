angular
  .module('app')
  .controller('standardCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['welcome','rich', 'standard', 'more', 'about'];
    $scope.selectedValue = 'standard'; 

  
  }]);