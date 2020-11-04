var app = angular.module("myApp",['ngMaterial']);
app.controller('myContr', function($scope, $http, $mdDialog){
    //$http.get("/SIRclient/php/messages_output.php")
    $http.get("/SIRclient/php/getMessage.php")
    .then(function (response) {
        //$scope.infos = response.data.Json_Data;
        $scope.infos = response.data;
    });

    $http.get("/SIRclient/php/controllers_output.php")
    .then(function (response) {
        $scope.controllers = response.data.Json_Data;
    });

    $scope.test = function(){
        alert('test');
    }

    $scope.displayData = function(){
        $http.get("/SIRclient/php/select.php")
        .success(function(data){
            $scope.names = data;
            console.log(data);
        })
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
        //console.log(index);
    }


//check function for message selection
    $scope.msg_selected = 0;
    $scope.selectedIndex = -1;
    $scope.message_selected = function (msg){
        var index = $scope.selected.indexOf(msg);
        $scope.msg_selected = msg.body;
        console.log($scope.msg_selected);

        if(msg === $scope.selectedIndex) {
            $scope.selectedIndex = -1;
        } else {
            $scope.selectedIndex = msg;
        }

        console.log($scope.selectedIndex);
    }

    $scope.getClass = function(msg)
    {
        if(msg === $scope.selectedIndex){
            return "selected";
        } else {
            return "";
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
            alert("This is a test");
          }, function () {
            alert("you have cancelled the assignment");
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

