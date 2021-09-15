var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/adminIntelligentScheduling";
 

let dbase;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("数据库已创建!");

  dbase = db.db("adminIntelligentScheduling");
    // dbase.createCollection('user', function (err, res) {
    //     if (err) throw err;
    //     console.log("创建集合!");
    //     db.close();
    // });

    let myobj = {
        'userName': 'Mike'
    }


  db.close();
});

exports.findUserList = function(resolve) {
    dbase.collection("user").find({}, function(err, res) {
        if (err) throw err;
        // console.log("文档插入成功");
        // db.close();
        resolve(res)
    });
}