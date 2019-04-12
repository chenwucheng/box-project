var express = require('express');
var router = express.Router();
let {
    insert,
    find,
    updateOne,
    ObjectId
} = require("../libs/mongod.js")

//获取列表页商品
router.get('/getData', async (req, res, next) => {
    let data = await find('item',{});
    res.send(data);
});

//根据id获取商品
router.post('/getItem', async (req, res, next) =>{
    let {
        id
    } = req.body;
    let data = await find('item',{
        _id: ObjectId(id)
    })
    res.send(data);
});

//购买商品
router.post('/addItem', async (req, res, next) =>{
    let {
        sname,
        simgurl,
        stitle,
        sprice,
        sperson,
        snum
    } = req.body;

    let data = await find('buylist',{
        title: stitle,
        u_name: sname
    })
    if(data.length>0){
        let newNum = snum*1 + data[0].num*1
        await updateOne('buylist',{
            title: stitle,
            u_name: sname
        },{
            num: newNum
        })
        res.send("plus item successfuly");
    }else{
        //无购买过该商品时
        await insert('buylist',[{
            u_name: sname,
            title: stitle,
            imgurl: simgurl,
            price: sprice,
            person: sperson,
            num: snum
        }])
        res.send("add item successfuly");
    }
})

//获取当前用户订单
router.post('/getOrder',async (req, res, next) =>{
    let {
        suser
    } = req.body
    let data = await find('buylist',{
        u_name: suser
    })
    res.send(data);
})
module.exports = router;
