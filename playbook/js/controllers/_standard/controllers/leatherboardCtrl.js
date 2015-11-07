angular
  .module('standardApp')
  .controller('leatherboardCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['leatherboard', 'rectangle'];
    $scope.selectedValue = 'leatherboard'; 

  
  }]);