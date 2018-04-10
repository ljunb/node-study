const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname

    res.writeHead(200, {'Content-Type': 'text/plain'})
    const content = route(handle, pathname)
    res.write(content)
    res.end()
  }

  http.createServer(onRequest).listen(8080)
}

exports.start = start