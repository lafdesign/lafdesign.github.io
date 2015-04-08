angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['home','about','contact','portfolio', 'resume', 'svg'];
    $scope.selectedValue = 'home';

  
  }]);