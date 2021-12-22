var myApp = angular.module('myModule',[]);

myApp.controller('myController', function ($scope){
	var employee = {
		FirstName: "Mark",
		LastName: "Hast",
		Gender: "Female"
	};
	$scope.employee =employee;
});