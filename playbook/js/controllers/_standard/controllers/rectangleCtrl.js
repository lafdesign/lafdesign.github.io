angular
  .module('standardApp')
  .controller('rectangleCtrl', ['$scope', function($scope) {
    $scope.title = "";
    $scope.items = ['leatherboard', 'rectangle'];
    $scope.selectedValue = 'rectangle'; 

  
  }]);