//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);
sampleApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/AddNewOrder', {
            templateUrl: 'views/addOrder.html',
            controller: 'addOrderCtrl'
        })
        .when('/Confirmation', {
            templateUrl: 'views/confirmation.html',
            controller: 'confirmationCtrl'
        })
        .when('/Home', {
            templateUrl: 'views/home.html'
            /*controller: 'addOrderCtrl'*/
        })
        .when('/About', {
            templateUrl: 'views/about.html'
            /*controller: 'addOrderCtrl'*/
        })
        .when('/PersonalInfo', {
            templateUrl: 'views/personalInfo.html'
            /*controller: 'addOrderCtrl'*/
        })
    });
sampleApp.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
