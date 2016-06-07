angular
  .module('app')
  .controller('figCtrl', ['$scope', function($scope) {
    $scope.title = "fig";
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
    $scope.selectedValue = 'fig';

  




  }]);