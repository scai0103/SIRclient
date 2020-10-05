var app = angular.module("myApp",[]);
app.controller('myContr', function($scope, $http){
    $http.get("/php/output.php")
    .then(function (response) {
        $scope.infos = response.data.Json_Data;
    });
});