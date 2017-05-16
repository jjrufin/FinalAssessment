var app = angular.module("ticketKiosk", ["ui.bootstrap"]);



app.controller('ticketCtrl', function ($scope){
  console.log('controller is working');

  $scope.confirmedList = [];
  $scope.price = 2.50;
  $scope.amount = 1;

  $scope.getTotal = function (confirmed) {
    console.log('this function is working');
    $scope.confirmedList.push({name: confirmed.name, amount: confirmed.amount });
    console.log($scope.confirmedList);



  }
});
