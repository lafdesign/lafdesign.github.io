angular
  .module('tildeApp')
  .controller('visitedCtrl', ['$scope', function($scope) {
  	$scope.title = "::visited";
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'visited';
  }]);
