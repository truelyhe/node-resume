let express = require('express');
let router = express.Router();
let mongo = require("../mongo/mongo");
let ObjectId = require('mongodb').ObjectId
//require("./swagger")
// 引入mongoose定义的schema table结构
//let BaseInfo = require('../modules/baseInfo');
// 查询
router.get('/data', (req, res) => {
  const {
    id
  } = req.query;
  mongo.findAll("user", {
    _id: new ObjectId(id)
  }, function (result) {
    res.send({
      code: 200,
      data: result
    })
  });
})

//修改
router.put("/updateData/:id", function (req, res) {
  const id = req.params.id;
  const data = req.body;
  const filter = {
    _id: ObjectId(id)
  };
  mongo.updateOne("user", filter, data, function (result) {
    res.send({
      code: 200,
      msg: '修改成功'
    });
  });
});

// 关联查询
router.get('/allData', (req, res) => {
  let pipeLine = [
    {
      $lookup: {
        from: 'job',
        localField: 'resumeId' ,
        foreignField: 'resumeId',
        as: 'jobInfo'
      }
    }
  ]
  mongo.queryAggregateMultiTable("user", pipeLine, function (result) {
    res.send({
      code: 200,
      data: result
    })
  });
})

//修改
router.put('/:_id',(req,res)=>{
  const _id=req.params;
  const {username,password,gender,tel,avatarUrl}=req.body;
  db
  .updateOne({_id},{username,password,gender,tel,avatarUrl})
  .then((data)=>{
    res.json({
      code:200,
      status:0,
      message:"修改成功" 
    })
  })
})

module.exports = router;