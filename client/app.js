var app = angular.module('Webdxd', []);
// [] more pulg in could be used

app.controller('AppCtrl', function($http){
// 	// $http angular
// this.student = student; 代表function

	var app = this;
	app.addNewButton = "Add New";
	//	first time open show addNew

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

	app.addMode = false;

	app.addNew = function(){

		app.addMode= !app.addMode;
		app.addNewButton = app.addMode ? "Close" : "Add New";
		app.newStudent = "";
	}

	app.submitForm = function(){
		console.log(app.newStudent);
		$http.post('http://localhost:3000/new', app.newStudent).success(function (newStudent){
				app.student.push(newStudent);
				app.addNew();
			//	type in disappear
			});
		};
			// .failure(function(err){
			// 	console.log(err);
			// 	})
			// };

});

