const handler_hello = async (ctx, next) => {
  ctx.response.body = `<h1>Hello, ${ctx.params.name}!</h1>`
}

module.exports = [
  {
    path: 'hello/:name',
    method: 'GET',
    handler: handler_hello
  }
]