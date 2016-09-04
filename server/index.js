var express = require('express');
// 默认去node——model
var mongoose = require('mongoose');

var cors = require('cors');
// 当你从一个服务器发送到一个服务器时 判断是否允许回应

mongoose.connect('mongodb://localhost/webdxd');
// 连接mongodb 使用mongoose协议
// mention which and where database going to use


var studentSchema = {
	firstName: String,
	lastName: String,
	email:String,
	age: Number
}
// define by yourself


var Student = mongoose.model('Student', studentSchema, 'student');
//model-name   model-schema  mongodb-collection
// 数据make到Student


var app = express();



// app.get('/', function(req, res){
// browser type localhost:3000/
// root


// app.get('/student', function(req, res){
// browser type localhost:3000/student
// 

	// Student.find(function(err, doc){
		// after find get in this function
		// err can be replaced by any name but it only means err
	// Student.find().select('firstName').exec(function(err, doc){
	// 	console.log(err);
	// 	console.log(doc);
		// res.send(doc);
		// only one res
// 	})

// 	res.send('Hello World!');
// });
// 获取数据
// post 发布
// update 现有数据
// delete 删除

// '/' 根目录
// 访问根目录时显示hello world

// req request
// res respond

// one get= one event

app.use(cors());

// API
app.get('/', function(req, res){
res.send('Hello World!');
});
// API
app.get('/student', function(req, res){
		
	Student.find().select('firstName age').exec(function(err, doc){
		console.log(err);
		console.log(doc);
		res.send(doc);
		
	})
});

// API
// 
app.get('/student/:id', function(req, res){
	Student.findById(req.params.id, function(err, doc){
		res.send(doc);
	})
});


app.listen(3000);
// port could be any num, but can not have more than one connect