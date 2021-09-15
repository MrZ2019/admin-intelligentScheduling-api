
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.findUserList(query).then((data)=> {

      return data
    })
}