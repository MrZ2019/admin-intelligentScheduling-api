
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.findUserList().then((list)=> {
      let data = 
      {
        page: 0,
        total: 10,
        rows: list
      }
      return data
    })
}