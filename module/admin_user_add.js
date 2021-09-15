
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.addUser(query).then((list)=> {
      let data = list[0]
      return data
    })
}