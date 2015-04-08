angular
  .module('app')
  .controller('portfolioCtrl', ['$scope', function($scope) {
    $scope.title = "Portfolio";
    $scope.items = ['home','about','contact','portfolio', 'resume', 'svg'];
    $scope.selectedValue = 'portfolio';

  
  }]);