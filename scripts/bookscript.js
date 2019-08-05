
var app = angular.module('myApp', []);
app.controller('tableCtrl', function($scope) {
    $scope.Books = [
{ BookId: 1, BookName: "Wealth of Nations", Author: "Adam Smith" },
{ BookId: 2, BookName: "Mudassar Khan", Author: "India" },
{ BookId: 3, BookName: "Suzanne Mathews", Author: "France" },
{ BookId: 4, BookName: "Robert Schidner", Author: "Russia" }
];
 
});