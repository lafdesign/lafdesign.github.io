angular
  .module('tildeApp')
  .controller('ampersandCtrl', ['$scope', function($scope) {
  	$scope.title = "&amp; / States otherwise ",
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'ampersand';
  }]);
