
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.updateUser(query).then((res)=> {
      let data = res
      return data
    })
}