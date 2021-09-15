var MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

var url = "mongodb://localhost:27017/adminIntelligentScheduling";
 

let dbase;

exports.connect = function() {
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        console.log("数据库已创建!");
      
        dbase = db.db("adminIntelligentScheduling");
          // dbase.createCollection('user', function (err, res) {
          //     if (err) throw err;
          //     console.log("创建集合!");
          //     db.close();
          // });
      
          // let myobj = {
          //     'userName': 'Mike'
          // }
      
      
      //   db.close();
    });      
}

exports.findUserList = function() {

    let p = new Promise((resolve)=> {
        dbase.collection("user").find({}).toArray(function(err, res) {
            if (err) throw err;
            // console.log("文档插入成功");
            // db.close();
            resolve(res)
        });
    })

    return p;

}

exports.findUser = function(id) {

    let p = new Promise((resolve)=> {
        dbase.collection("user").find({_id: ObjectId(id)}).toArray(function(err, res) {
            if (err) throw err;
            // console.log("文档插入成功");
            // db.close();
            resolve(res)
        });
    })

    return p;

}