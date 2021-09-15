

module.exports = (query, request) => {
  return new Promise((resolve, reject)=> {

    let data = 
    {
      page: 0,
      total: 10,
      rows: []
    }
  	resolve({
      status: 200,
      data: data
    })
  })
}