// JavaScript Document
(function(){
var app = angular.module('myApp', []);

app.controller('NotesController', function(){
	this.products=notes;
});

app.controller('addNote', function(){
	this.newnote = {};
	
	this.addnewnote = function(anewnote){
		anewnote.text.push(this.newnote);
		this.newnote = {};
	};
});

app.controller('myController', function($scope) {
	this.products=notes;
    $scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});

var notes = [{
		note: [{text: "Today"}]
	},{
		note: [{text:"Tomorrow"}]
	},{
		note: [{text:"The day after tomorrow"}]
	}
];

})();