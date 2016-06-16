angular
  .module('tildeApp')
  .controller('tildeCtrl', ['$scope', function($scope) {
  	$scope.title = "tilde ~ next selector  : And we bring you a digital agency:: ";
    $scope.items = ['focus','hover','active','visited','ampersand','tilde'];
    $scope.selectedValue = 'tilde';
  }]);
