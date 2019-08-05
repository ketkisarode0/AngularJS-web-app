var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl : 'index.html',
        controller: 'indexController'
    })
    .when('/Book', {
        templateUrl : 'book.html',
        controller: 'bookController'
    });
    // .when( {
    //     templateUrl: 'index.html'
    // });
   
}]);

app.controller('indexController', ['$scope', function($scope){
$scope.message = 'hello index';
}]);

app.controller('bookController', ['$scope',function($scope){
    $scope.message = 'hello book';
}]);