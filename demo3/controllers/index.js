const handler_index = async (ctx, next) => {
  ctx.response.body = `
    <h1>Index</h1>
    <form action='/signin' method='post' >
      <p>Name: <input name='name' value='koa' ></p>
      <p>Password: <input name='password' type='password' ></p>
      <p><input type='submit' value='Submit' ></p> 
    </form>
  `
}

const hanlder_signin = async (ctx, next) => {
  let name = ctx.request.body.name || ''
  let password = ctx.request.body.password || ''
  console.log(`Sign in with name: ${name}, password: ${password}`)
  if (name === 'koa' && password === '123456') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`
  } else {
    ctx.response.body = `
      <h1>Login failed!</h1>
      <p><a href='/'>Try again!</a></p>
    `
  }
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