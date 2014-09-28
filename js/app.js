// JavaScript Document
(function(){
var app = angular.module('myApp', []);

app.controller('NotesController', function(){
	this.products=notes;
});

app.controller('mycontroller', function($scope) {
	this.products=notes;
	
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});

var notes = [{
		note: "Test1."
	},{
		note: "Test2."
	},{
		note: "Test3."
	}
];

})();