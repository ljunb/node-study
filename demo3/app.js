const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controllers = require('./middlewares/controller')

const app = new Koa()

// koa-bodyparser 中间件要先于 router 插入
app.use(bodyParser())
// koa-router 中间件将在 controllers 中使用到
app.use(controllers())

app.listen(3000)