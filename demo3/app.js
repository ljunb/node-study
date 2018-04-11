const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const controllers = require('./middlewares/controller')
const xtpl = require('xtpl/lib/koa2')

const app = new Koa()
// 添加 xtemplate 作为模板引擎
xtpl(app, {
  views: './views'
})

// koa-bodyparser 中间件要先于 router 插入
app.use(bodyParser())
// koa-router 中间件将在 controllers 中使用到
app.use(controllers())

app.listen(3000)