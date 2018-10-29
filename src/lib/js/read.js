var db = require('./db.js');
var express = require('express');
var app = express();
app.get('/newslist', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.query('zuixin', {}, function(data) {
		res.send(data);
	});
});
app.get('/vediolist', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.query('vedios', {}, function(data) {
		res.send(data);
	});
});
app.get('/zuixinlist',function(req,res){
//	console.log(req.query.limit);
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.queryMore('zuixinlist', {}, function(data) {
		res.send(data);
	},parseInt(req.query.limit),req.query.page);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	var info = req.body;
	console.log(info);
	db.query('users',{username:info.username,password:info.password},function(data){
		if(data.length>0){
			res.send({result:"success"});
		}else{
			res.send({result:"defeat"});
		}
	});
});

//查询用户
app.get('/getuser', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.query('users', {email:req.query.email}, function(data) {
		res.send(data);
	});
});

//注册
app.get('/registe',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.insert('users',{username:req.query.username,email:req.query.email,password:req.query.password},function(data){
		console.log(req.query);
		res.send(data);
	});
});


//搜索热词展示
app.get('/hotwords',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	db.queryByOrder('hotwords',{},function(data){
		res.send(data);
	},req.query.keyword,-1);
});

//查询视频
app.get('/vedio',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	db.query('vedios',{_id:parseFloat(req.query.id)},function(data){
		res.send(data);
	});
});

//查询相关文章
app.get('/relative',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	db.query('relativeArtical',{},function(data){
		res.send(data);
	});
});

//点赞
app.get('/like',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	db.query('users',{username:req.query.username,zanId:req.query.id},function(data){
		res.send(data);
	});
});

//点赞数据更新
app.get('/likeAdd',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	db.update('users',{username:req.query.name,zanId:req.query.id},function(data){
		db.updateArt('users',{username:req.query.name,id:req.query.id,img:req.query.img,title:req.query.title,time:req.query.time},function(data){
			console.log("收藏到列表");
		});
		db.updatelike('zuixinlist',{id:req.query.id},function(data){
			console.log("收藏+1");
		});
		res.send("收藏成功");
	});
});


//用户中心数据展示
app.get('/activities',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	db.query('users',{username:req.query.name},function(data){
		res.send(data);
	});
});

//展示用户动态
//app.get('/showActivities',function(res,req){
//	res.setHeader('Access-Control-Allow-Origin','*');
//	db.querySelect('zuixinlist',{ar:req.query.likeId},function(data){
//		res.send(data);
//	});
//});

app.listen(12348);