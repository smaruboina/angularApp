<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Angular Controllers</title>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
</head>
<body>
 <div ng-app="myApp" ng-controller="myCntrl">
    Select the course: <button ng-click="java();">Java</button>
     <button ng-click="angular();">Angular JS</button>
     <button ng-click="html();">HTML</button>
     <p>Selected Course is:{{selectedItem}}</p>
 </div>
 <script>
     var myList=angular.module('myApp',[]);
     myList.controller('myCntrl',function ($scope) {
        $scope.selectedItem='none';
        $scope.java=function () {
            $scope.selectedItem='Java';
        };
         $scope.angular=function () {
             $scope.selectedItem='Angular JS';
         };
         $scope.html=function () {
             $scope.selectedItem='Html';
         };
     });

 </script>
</body>
</html>
