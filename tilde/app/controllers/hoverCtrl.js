angular
  .module('tildeApp')
  .controller('hoverCtrl', ['$scope', function($scope) {
  	$scope.title = "::hover";
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'hover';
  }]);
