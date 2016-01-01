var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	$scope.user = {
		firstName: "",
		lastName: "",
		occupation: "",
		email: "",
		phone: ""
	}
});