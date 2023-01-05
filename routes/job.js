let express = require('express');
let router = express.Router();
let mongo = require("../mongo/mongo");
let ObjectId = require('mongodb').ObjectId

// 查询
router.get('/data', (req, res) => {
  const {
    id
  } = req.query;
  mongo.findAll("job", {
    resumeId: id
  }, function (result) {
    res.send({
      code: 200,
      data: result
    })
  });
})

// 新增
router.post('/insetData', (req, res) => {
  mongo.insertOne("job", req.body, function (result) {
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
    resumeId: id
  };
  mongo.updateOne("job", filter, data, function (result) {
    res.send({
      code: 200,
      msg: '修改成功'
    });
  });
});

module.exports = router;