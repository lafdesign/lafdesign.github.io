(function(angular, undefined) {
    "use strict";
    angular.module('dsntApp', ['ngMaterial', "ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/tab/dash');
        $stateProvider
        .state('view1', {
            url: "/view1",
            templateUrl: "partials/view1.html"
        })
        .state('view2', {
            url: "/view2",
            templateUrl: "partials/view2.html"
        })
        .state('view3', {
            url: "/view3",
            templateUrl: "partials/view3.html"
        })
           .state('view4', {
            url: "/view4",
            templateUrl: "partials/view4.html"
        })
        ;
    })
    .controller('tabCtrl', function($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/view1");
                    break;
                case 1:
                    $location.url("/view2");
                    break;
                case 2:
                    $location.url("/view3");
                    break;
                     case 3:
                    $location.url("/view4");
                    break;
            }
        });
    });

})(angular);
