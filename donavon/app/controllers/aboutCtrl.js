angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "About";
    $scope.items = ['work','about','news',];
    $scope.selectedValue = 'about';
  }]);