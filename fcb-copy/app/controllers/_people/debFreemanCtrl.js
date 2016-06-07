angular
  .module('app')
  .controller('debFreemanCtrl', ['$scope', function($scope) {
    $scope.title = "Deb Freeman";
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
    $scope.selectedValue = 'deb-freeman';

  
  }]);