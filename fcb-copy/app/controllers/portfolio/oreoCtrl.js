angular
  .module('app')
  .controller('oreoCtrl', ['$scope', function($scope) {
    $scope.title = "Oreo";
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
    $scope.selectedValue = 'oreo';

  





  }]);