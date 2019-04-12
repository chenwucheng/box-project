

//商品列表编辑页====
const Router = require('koa-router')

const db = require('../db/index')


var router = new Router();
 

router.get('/',async (ctx, next) => {

    // console.log(ctx.query)


    let {user} = ctx.query;  

    let res2 = await db.find('goodslist',{user});


    ctx.body = res2
})


router.post('/',async (ctx, next) => {

    
    // console.log(ctx.request.body)

    let {user, fl, zt, priced, price, kq, addtime} = ctx.request.body;  
    
    let res = await db.find('goodslist', { user:  user  });
	
//   let res1 = db.delete('goodslist', { user:user});
	
//   let resdl = db.delete('goodslist', { user:user});
//   let res2 =db.insert('goodslist',{user,fl, zt, priced, price, kq, addtime})
    // console.log(res2.length)
//  if (res.length > 0) {
        let res1 = db.delete('goodslist', { user:user});

        let res2 =db.insert('goodslist',{user,fl, zt, priced, price, kq, addtime})
//  }
       
        





//  ctx.body = '123'
})





module.exports = router