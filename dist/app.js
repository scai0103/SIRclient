var app = angular.module("myApp",['ngMaterial']);
app.controller('myContr', function($scope, $http, $mdDialog){
    $http.get("/php/messages_output.php")
    .then(function (response) {
        $scope.infos = response.data.Json_Data;
    });

    $http.get("/php/controllers_output.php")
    .then(function (response) {
        $scope.controllers = response.data.Json_Data;
    });

    $scope.test = function(){
        alert('test');
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
        //console.log($scope.selected);
        //console.log(index);
    }


//function for message selection
    $scope.msg_selected = 0;
    $scope.selectedIndex = -1;
    $scope.message_selected = function (msg){
        var index = $scope.selected.indexOf(msg);
        $scope.msg_selected = msg.body;
        console.log($scope.msg_selected);
        console.log(msg.name);
        console.log(msg.type);

        if(msg === $scope.selectedIndex) {
            $scope.selectedIndex = -1;
        } else {
            $scope.selectedIndex = msg;
        }

        //console.log($scope.selectedIndex);
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
    //remove message from table
    $scope.remove_msg = function(ev)
    {
        var confirm = $mdDialog.confirm()
        .title('Confirm')
        .textContent('Remove selected message from table ?')
        .clickOutsideToClose(true)
        .ariaLabel('Lucky Day')
        .targetEvent(ev)
        .ok('YES')
        .cancel('NO');

        $mdDialog.show(confirm).then(function () {
            $scope.status = 'DO SOMETHING HERE';
            alert("Message deleted");
          }, function () {
            $scope.status = 'CANCEL';
            alert("message not deleted");
          });
    };



    //add message dialog
    $scope.showDialog = function(evt){
        $mdDialog.show({
            controller: 'myContr',
            templateUrl:'/view/add_msg.html',
            targetEvent: evt,
            clickOutsideToClose: true
        })
        .then(function(answer){
            $scope.status = 'yes' + answer;
        }, function(){
            $scope.status = 'Cancelled';
        });
    }

    $scope.new_msg_name = "";
    $scope.new_msg_type = "";
    $scope.new_msg_body = "";
    //add message confirm button
    $scope.confirm_add = function(msg){
        $scope.new_msg_name = msg.name;
        $scope.new_msg_type = msg.type;
        $scope.new_msg_body = msg.body;
        $scope.showAlert(msg.name);
    }

    //add meesage cancel button
    $scope.cancel_add = function(){
        $mdDialog.hide();
    }

    $scope.showAlert = function (ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Message added')
            .textContent(ev + ' is added to the table')
            .ariaLabel('Alert Dialog Demo')
            .ok('Thanks')
            .targetEvent(ev)
        );
      };
    
});

