const handler_index = async (ctx, next) => {
  ctx.body = await ctx.render('index')
}

const hanlder_signin = async (ctx, next) => {
  let name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''
  console.log(`Sign in with name: ${name}, password: ${password}`)
  
  const params = {
    name,
    isLoginSuccess: name.length !== 0 && password.length !== 0
  }
  ctx.body = await ctx.render('signin', params)
}

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: handler_index,
  },
  {
    path: '/signin',
    method: 'POST',
    handler: hanlder_signin,
  }
]