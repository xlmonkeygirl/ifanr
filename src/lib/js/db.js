var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';
var dbName = 'ifanr';

//简单查询
function query(tablename,params,callback){
    MongoClient.connect(url,function(err,client){
        assert.equal(null,err);
        console.log('Connected successfully to server');
        var db = client.db(dbName);
        db.collection(tablename).find(params).toArray(function(err,docs){
            assert.equal(null,err);
            console.log('Found the following records');
            callback(docs);
        });
        client.close();
    });
}


//分页查询
function queryMore(tablename,params,callback,l,p){
    MongoClient.connect(url,function(err,client){
        assert.equal(null,err);
        console.log('Connected successfully to server');
        var db = client.db(dbName);
        db.collection(tablename).find(params).limit(l).skip((p-1)*l).toArray(function(err,docs){
            assert.equal(null,err);
            console.log('Found the following records');
            callback(docs);
        });
        client.close();
    });
}

//插入数据
function insert(tablename,params,callback){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
        console.log('Connected successfully to server');
        var db = client.db(dbName);
        db.collection(tablename).insert(params,function(err,result){
        	if(err){
        		console.log('ERROE:'+err);
        		return;
        	}
        	callback(result);
        });
        client.close();
	});
}

//排序查询
function queryByOrder(tablename,params,callback,key,num){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
		console.log('Connected successfully to server');
		var db = client.db(dbName);
		db.collection(tablename).find().sort({key:num}).toArray(function(err,docs){
			assert.equal(null,err);
			console.log('Found the following records');
            callback(docs);
		});
		client.close();
	});
}

//收藏
function update(tablename,parames,callback){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
		console.log('Connected successfully to server');
		var db = client.db(dbName);
		db.collection(tablename).updateOne({username:parames.username},{$push:{'zanId':parames.zanId,}},function(err,result){
			if(err){
				console.log('Err'+err);
				return;
			}
			callback(result);
		});
		client.close();
	});
}

function updateArt(tablename,parames,callback){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
		console.log('Connected successfully to server');
		var db = client.db(dbName);
		db.collection(tablename).updateOne({username:parames.username},{$push:{'zan':{id:parames.id,img:parames.img,title:parames.title,time:parames.time}}},function(err,result){
			if(err){
				console.log('Err'+err);
				return;
			}
			callback(result);
		});
		client.close();
	});
}

//收藏+1
function updatelike(tablename,parames,callback){
	MongoClient.connect(url,function(err,client){
		assert.equal(null,err);
		console.log('Connected successfully to server');
		var db = client.db(dbName);
		console.log(parames.id);
		db.collection(tablename).updateOne({id:parames.id},{$inc:{'like':1}},function(err,result){
			if(err){
				console.log(err);
				return;
			}else{
				callback(result);
			}
		});
		client.close();
	});
}


//条件查询，展示用户动态
//function querySelect(tablename,parames,callback){
//	MongoClient.connect(url,function(err,client){
//		assert.equal(null,err);
//		console.log('Connected successfully to server');
//		var db = client.db(dbName);
//		var arr = parames.arr;
//		for(var i=0 ,i<arr.length;i++){
//			db.collection(tablename).find()
//		}
//	})
//}




console.log('开始使用mongodb');
module.exports = {
    query:query,
    queryMore:queryMore,
    insert:insert,
    queryByOrder:queryByOrder,
    update:update,
    updatelike:updatelike,
    updateArt:updateArt
}


