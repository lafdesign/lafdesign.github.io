angular
  .module('app')
  .controller('LincolnCtrl', ['$scope', function($scope) {
    $scope.title = "Lincoln";
    $scope.items = ['work','about','news','contact','karyn-rockwell','deb-freeman','ari-halper',
    'buschGarden',
	'SeaWorld',
	'Lincoln',
	'FDATumblr',
	'FDAContract',
	'FDACreatures',
	'FDASmoke',
	'mPower',
	'jamaica',
	'oreo',
	'fig'];
    $scope.selectedValue = 'Lincoln';

  





  }]);