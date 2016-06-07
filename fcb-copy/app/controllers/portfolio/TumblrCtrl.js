angular
  .module('app')
  .controller('TumblrCtrl', ['$scope', function($scope) {
    $scope.title = "FDATumblr";
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
    $scope.selectedValue = 'FDATumblr';

  





  }]);