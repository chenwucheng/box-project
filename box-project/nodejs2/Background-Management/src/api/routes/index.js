const Router = require('koa-router')
const koa = require('koa');
const body = require('koa-body')

var router = new Router();

const routers =require('./username')
const routersa = require('./addname') 
const routersb =require('./delename')  

const routersc =require('./goodsname')
const routersd = require('./addgoods') 
const routerse =require('./delegoods') 
const routersf =require('./bianjigoods') 
 
router.use(body({
    multipart: true,
    keepExtensions:true,
}))
router.use('/username', routers.routes())
router.use('/addname', routersa.routes())
router.use('/delename', routersb.routes())

router.use('/goodsname', routersc.routes())
router.use('/addgoods', routersd.routes())
router.use('/delegoods', routerse.routes())
router.use('/bianjigoods', routersf.routes())


module.exports =router