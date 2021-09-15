
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.deleteUser(query).then((res)=> {
      let data = res
      return data
    })
}