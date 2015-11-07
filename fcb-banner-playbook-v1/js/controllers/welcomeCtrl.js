angular
  .module('app')
  .controller('welcomeCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['welcome','rich', 'standard', 'more', 'about'];
    $scope.selectedValue = 'welcome'; 

  
  }]);