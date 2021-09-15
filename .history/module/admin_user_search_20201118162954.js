

module.exports = (query, request) => {
  return new Promise((resolve, reject)=> {

    let data = 
    {
      page: 0,
      total: 10,
      rows: [
        {
          "userName": "Jack"
        }
      ]
    }
  	resolve({
      status: 200,
      data: {
        body: data
      }
    })
  })
}