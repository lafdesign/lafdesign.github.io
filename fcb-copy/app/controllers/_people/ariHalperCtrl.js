angular
  .module('app')
  .controller('ariHalperCtrl', ['$scope', function($scope) {
    $scope.title = "Ari Halper";
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


    $scope.selectedValue = 'ari-halper';

  
  }]);