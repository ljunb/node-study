const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname

    res.writeHead(200, {'Content-Type': 'text/plain'})
    // 将服务器回调函数中的 res 对象，作为参数传入到路由中，在对应的路由处理函数中，调用 res 对象的
    // 函数，来返回内容给用户。如此一来，在代码同步执行下，每个请求过来之后，都给到路由处理函数，
    // 在合适的时机进行回调响应结果。
    route(handle, pathname, res)
  }

  http.createServer(onRequest).listen(8080)
}

exports.start = start