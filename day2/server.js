const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (req, res) => {
    let postData = ''
    const pathname = url.parse(req.url).pathname
    route(handle, pathname, res, req)
  }

  http.createServer(onRequest).listen(8092)
}

exports.start = start