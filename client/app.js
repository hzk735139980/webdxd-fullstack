var app = angular.module('Webdxd', []);
// [] more pulg in could be used

app.controller('AppCtrl', function($http){
// 	// $http angular
// this.student = student; 代表function

var app = this;


$http.get('http://localhost:3000/student').success(function(studentList){
	app.student = studentList;
});

app.selectStudent = function(student){
	
	$http.get('http://localhost:3000/student/' + student._id).success(function(studentDetail){
		app.selectedStudent = studentDetail;
		// console.log(student);
		app.selectedStudent.fullName = app.selectedStudent.firstName + ' ' + app.selectedStudent.lastName;
	})
}

});