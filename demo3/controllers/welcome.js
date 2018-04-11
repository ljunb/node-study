const handler_hello = async (ctx, next) => {
  ctx.body = await ctx.render('welcome', {name: ctx.params.name})
}

module.exports = [
  {
    path: '/welcome/:name',
    method: 'GET',
    handler: handler_hello
  }
]