const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.method} ${ctx.url}`)
  await next()
})

router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index</h1>'
})

router.get('/hello/:name', async (ctx, next) => {
  ctx.response.body = `<h1>Hello, ${ctx.params.name}!</h1>`
})

app.use(router.routes())

app.listen(3001)