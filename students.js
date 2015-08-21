var studentsBookApp = angular.module("studentsBookApp", []);
studentsBookApp.controller("StudentsController", function StudentsController($scope){ //Define Controller
	$scope.students=[ // Create Student Model with three attributes
		{name:"John White", phone: "1234579", class: "2° ESO"},
		{name: "Rose Luxemburg", phone: "46549879", class: "1° ESO"},
		{name: "Albert Smith", phone: "5646546", class: "2° ESO"},
		{name: "Ana Marine", phone: "46549879", class: "3° ESO"}
	];
});