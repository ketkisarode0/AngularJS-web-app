var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home', {
        templateUrl : 'food.html',
        controller: 'indexController'
    })
    .when('/Book', {
        templateUrl : 'book.html',
        controller: 'bookController'
    })
    .otherwise( {
         redirectTo: '/Home'
     });
   
}]);

app.controller('indexController', ['$scope', function($scope){
$scope.message = 'hello index';
}]);

app.controller('bookController', ['$scope',function($scope){
    $scope.message = 'hello book';
}]);

app.controller('tableCtrl', function($scope, $http){
        $scope.Books = [
            { BookId: 1, BookName: "Wealth of Nations", Author: "Adam Smith" },
            { BookId: 2, BookName: "Mudassar Khan", Author: "India" },
            { BookId: 3, BookName: "Suzanne Mathews", Author: "France" },
            { BookId: 4, BookName: "Robert Schidner", Author: "Russia" }
            ];

            $http.get("http://localhost:3000/helloworld")
            .then(function(response){
                console.log(response.data.json);
            });
});

