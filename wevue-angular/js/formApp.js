angular.module('formApp', [])
    .controller('FormController', ['$scope', '$http', function($scope, $http) {
      $scope.form_data = {};
      
      $scope.update = function(user) {
        $scope.form_data = angular.copy(user);
         var dataObject = {
        item_name : "Contact Me Form"
        ,item_data : $scope.form_data
       };
       
     var responsePromise = $http.post("http://api.wevue.com/api/v1/misc/add_form_submission", dataObject, {});
                   responsePromise.success(function(dataFromServer, status, headers, config)                
                   {
                       var outputDate=angular.fromJson(dataFromServer);
                   });
                    responsePromise.error(function(data, status, headers, config) {
                      console.log("Error in fetching user store call!");
                   });    
                };
            }]);
