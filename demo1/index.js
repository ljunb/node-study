const server = require('./server')
const route = require('./route')
const requestHandlers = require('./requestHandlers')

const handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload
}

server.start(route.route, handle)