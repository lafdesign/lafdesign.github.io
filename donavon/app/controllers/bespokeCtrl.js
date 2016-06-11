angular
  .module('app')
  .controller('bespokeCtrl', ['$scope', function($scope) {
    $scope.title = "Bespoke Jackets";
    $scope.items = ['work','about','news',];
    $scope.selectedValue = 'bespoke';

  
  }]);