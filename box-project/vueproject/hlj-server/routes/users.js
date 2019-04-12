var express = require('express');
var router = express.Router();
let {
  find,
  insert
} = require("../libs/mongod.js");
var token = require("../libs/token.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//登录路由
router.post('/login', async (req, res, next) => {
  let {
    inputUser,
    inputPass
  } = req.body;

  let data = await find('user',{
    username: inputUser
  })
  console.log(data);
  if (data.length > 0 && data[0].password == inputPass) {
    res.send({
      status: "success",
      token: token.createToken({
        inputUser,
        inputPass
      }, 3600)
    });
  } else {
    res.send({
      status: "fail"
    });
  }
})

//注册路由
router.post('/register', async (req, res, next) => {
  let {
    inputUser,
    inputPass
  } = req.body;
  let data = await find('user', {
    username: inputUser
  });
  if (data.length > 0) {
    res.send({
      status: "fail"
    })
  } else {
    await insert('user', [{
      username: inputUser,
      password: inputPass
    }])
    res.send({
      status: "success"
    })
  }
})

//登录状态判断路由
router.post('/isLogin', (req, res, next) => {
  let {
    isToken
  } = req.body;
  if (token.checkToken(isToken)) {
    res.send({
      status: token.checkToken(isToken),
      curuser: token.decodeToken(isToken).payload.data.inputUser
    })
  } else {
    res.send({
      status: token.checkToken(isToken)
    })
  }
})
module.exports = router;
