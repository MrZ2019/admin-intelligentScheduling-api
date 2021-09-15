
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.findUser(query.id).then((list)=> {
      let data = list[0]
      return data
    })
}