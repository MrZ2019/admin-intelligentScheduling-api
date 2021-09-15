
let db = require('../util/mongodb');

module.exports = (query, request) => {
    
    return db.find({id: query.id}).then((list)=> {
      let data = 
      {
        page: 0,
        total: 10,
        rows: list
      }
      return data
    })
}