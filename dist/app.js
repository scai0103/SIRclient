var app = angular.module("myApp",[]);
app.controller('myContr', function($scope, $http){
    $http.get("/php/messages_output.php")
    .then(function (response) {
        $scope.infos = response.data.Json_Data;
    });

    $http.get("/php/controllers_output.php")
    .then(function (response) {
        $scope.controllers = response.data.Json_Data;
    });

    $scope.message_array = [];
    $scope.addToArray = function(){

    };

});
