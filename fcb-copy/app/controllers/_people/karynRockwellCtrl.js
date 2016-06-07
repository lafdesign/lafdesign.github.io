angular
  .module('app')
  .controller('karynRockwellCtrl', ['$scope', function($scope) {
    $scope.title = "Karyn Rockwell";
    $scope.items = ['work','about','news','contact','karyn-rockwell','deb-freeman','ari-halper', 
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
    $scope.selectedValue = 'karyn-rockwell';

  
  }]);