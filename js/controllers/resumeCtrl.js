angular
  .module('app')
  .controller('resumeCtrl', ['$scope', function($scope) {
  	$scope.title = "Resume";
    $scope.items = ['home','about','contact','portfolio', 'resume', 'svg'];
    $scope.selectedValue = 'resume';
  }]);