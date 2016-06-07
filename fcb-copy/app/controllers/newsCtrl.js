angular
  .module('app')
  .controller('newsCtrl', ['$scope', function($scope) {
    $scope.title = "News";
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

    $scope.selectedValue = 'news';

  
  }]);


