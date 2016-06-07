angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
  	$scope.title = "About";
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


    $scope.selectedValue = 'about';
  }]);