angular
  .module('tildeApp')
  .controller('focusCtrl', ['$scope', function($scope) {
  	$scope.title = "::focus";
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'focus';
  }]);




