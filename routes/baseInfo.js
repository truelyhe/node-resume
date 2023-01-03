let express = require('express');
let router = express.Router();
let mongo = require("../mongo/mongo");
// 引入mongoose定义的schema table结构
//let BaseInfo = require('../modules/baseInfo');

router.get("/insertOne",function(req,res){
  var data={
    name:"花花",
    age:14,
    sex:"女",
    address:"上海市"
  }
  mongo.insertOne("user",data,function(result){
    console.log(result,'result')
    res.send(200);
  });
});

// 要返回的内容
router.get('/demo',(req,res)=>{
  mongo.findAll("user",{},function(result){
    res.json(result)
  });
})

module.exports = router;