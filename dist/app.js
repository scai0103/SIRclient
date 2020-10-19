var app = angular.module("myApp",['ngMaterial']);
app.controller('myContr', function($scope, $http,$mdDialog){
    $http.get("/php/messages_output.php")
    .then(function (response) {
        $scope.infos = response.data.Json_Data;
    });

    $http.get("/php/controllers_output.php")
    .then(function (response) {
        $scope.controllers = response.data.Json_Data;
    });

    $scope.test = function(){
        console.log('clicked');
    }


//Assign device checkbox all
    $scope.CheckAll = function (){
        if($scope.selectAll){
            angular.forEach($scope.controllers,function(ctr){
                index = $scope.selected.indexOf(ctr);
                if(index >= 0)
                {
                    return true;
                }
                else 
                {
                    $scope.selected.push(ctr);
                }
            });
        }
        else{
            $scope.selected = [];
        }
    }

    $scope.selected = [];

    $scope.exist = function(ctr){
        return $scope.selected.indexOf(ctr) > -1;
    }

    $scope.select = function(ctr){
        var index = $scope.selected.indexOf(ctr);
        if(index > -1)
        {
            $scope.selected.splice(index,1);
        }
        else 
        {
            $scope.selected.push(ctr);
        }
        console.log($scope.selected);
    }

    $scope.message_selected = [];

    $scope.message_exist = function(mes){
        return $scope.message_selected.indexOf(mes) > -1;
    }
/*
    $scope.message_add = function(mes){
        var index = $scope.message_selected.indexOf(mes);
        if(index > -1)
        {
            $scope.message_selected.splice(index,1);
        }
        else
        {
            $scope.message_selected.push(mes);
        }
        console.log($scope.message_selected.length);
    }
*/
    $scope.message_add = function(mes){
        var index = $scope.message_selected.indexOf(mes);
        if(index = -1)
        {
            $scope.message_selected.push(mes);
        }
        
        
    }
//Assign message to devices
    $scope.submit = function(ev)
    {
        var confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Assign message to selected devices ?')
        .ariaLabel('Lucky Day')
        .clickOutsideToClose(true)
        .targetEvent(ev)
        .ok('YES')
        .cancel('NO');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'DO SOMETHING HERE';
          }, function () {
            $scope.status = 'CANCEL';
          });
    };

    $scope.submit_all = function(ev)
    {
        var confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Assign message to All devices ?')
        .clickOutsideToClose(true)
        .ariaLabel('Lucky Day')
        .targetEvent(ev)
        .ok('YES')
        .cancel('NO');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'DO SOMETHING HERE';
          }, function () {
            $scope.status = 'CANCEL';
          });
    };

    $scope.remove = function(ev)
    {
        var confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Remove selcted messages ?')
        .clickOutsideToClose(true)
        .ariaLabel('Lucky Day')
        .targetEvent(ev)
        .ok('YES')
        .cancel('NO');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'DO SOMETHING HERE';
          }, function () {
            $scope.status = 'CANCEL';
          });
    };

    $scope.remove_all = function(ev)
    {
        var confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Remove all messages from all devices ?')
        .clickOutsideToClose(true)
        .ariaLabel('Lucky Day')
        .targetEvent(ev)
        .ok('YES')
        .cancel('NO');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'DO SOMETHING HERE';
          }, function () {
            $scope.status = 'CANCEL';
          });
    };




});
