const Koa = require('koa');
const Router = require('koa-router')
const render = require('koa-ejs');

const { PORT } = require('./src/constants/ports')
const  catalogPageController = require('./src/controllers/catalogPageController')
const  newBuildPageController = require('./src/controllers/newBuildPageController')

const app = new Koa();
const router = new Router();

router
    .get('/', catalogPageController)
    .get('/newbuild-:newbuildId', newBuildPageController)

app.use(router.routes());

render(app, {
  root: 'src/views',
  layout: 'template',
  viewExt: 'ejs',
});

app.listen(8080, ()=> {
  console.log(`server started on PORT ${PORT}`)
});

//gffgag