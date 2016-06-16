angular
  .module('tildeApp')
  .controller('activeCtrl', ['$scope', function($scope) {
  	$scope.title = "::active";
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'active';
  }]);
