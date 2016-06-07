angular
  .module('app')
  .controller('contactCtrl', ['$scope', function($scope) {
    $scope.title = "Contact Page";
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
    $scope.selectedValue = 'contact';

        function initialize() {

        var myLatlng = new google.maps.LatLng(40.74934,-73.98956);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
                              styles: [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]

        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
          var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'FCB New York'
  });
          var legend = document.createElement('div');
          legend.id = 'legend';
          legend.style.background = '#fff';
          legend.style.padding = '5px';
          legend.style.margin = '5px';
          legend.innerHTML = '<p>100 West 33rd St. <br />New York, NY 10001</p>';
          map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
      //$(document).bind("projectLoadComplete", initialize);
      window.setTimeout(initialize);

  }]);