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

exports.findUserList = function(query) {
    query.size -= 0;
    query.page -= 0;
    let total;
    let p = new Promise(async (resolve)=> {
        let query = await dbase.collection("user").find({}).limit(query.size).skip(query.page * query.size)

        let list = await query.toArray();

        resolve(list)
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


exports.updateUser = function(query) {

    let p = new Promise((resolve)=> {
        var whereStr = {"_id": ObjectId(query.userId)};  // 查询条件
        var updateStr = {$set: { "userName" : query.userName }};
        dbase.collection("user").updateMany(whereStr, updateStr, function(err, res) {
            if (err) throw err;
             console.log(res.result.nModified + " 条文档被更新");
            resolve(res)
        });
    })

    return p;

}
exports.addUser = function(query) {

    let p = new Promise((resolve)=> {
        let addStr = {
            userName: query.userName,
        }
        dbase.collection("user").insertOne(addStr, function(err, res) {
            if (err) throw err;
             console.log(res.insertedCount + " 条文档被插入");
            resolve(res)
        });
    })

    return p;

}
exports.deleteUser = function(query) {

    let p = new Promise((resolve)=> {
        let deleteStr = {
            _id: ObjectId(query.list.split(',')[0]),
        }
        dbase.collection("user").deleteOne(deleteStr, function(err, res) {
            if (err) throw err;
             console.log(res.deletedCount + " 条文档被删除");
            resolve(res)
        });
    })

    return p;

}