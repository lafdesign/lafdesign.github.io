angular
  .module('app')
  .controller('jamaicaCtrl', ['$scope', function($scope) {
    $scope.title = "Jamaica";
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
    $scope.selectedValue = 'jamaica';

  





  }]);