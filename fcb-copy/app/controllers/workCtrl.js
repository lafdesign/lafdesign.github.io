angular
  .module('app')
  .controller('workCtrl', ['$scope', function($scope) {
    $scope.title = "Work";
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
    $scope.selectedValue = 'work';

  





  }]);