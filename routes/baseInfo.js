let express = require('express');
let router = express.Router();
let mongo = require("../mongo/mongo");
let ObjectId = require('mongodb').ObjectId
//require("./swagger")
// 引入mongoose定义的schema table结构
//let BaseInfo = require('../modules/baseInfo');


/**
 * @swagger
 * tags:
 *   - name: baseInfo
 *     description: 简历-基本信息
 *   - name: job
 *     description: 简历-求职岗位
 *   - name: work
 *     description: 简历-工作经验
 * /baseInfo/data:
 *   get:
 *     tags:
 *        - baseInfo
 *     description: 基本信息-查询
 *     parameters:
 *       - name: id
 *     responses:
 *       200:
 *         description: 响应成功
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *               description: 姓名
 *               example: 张三
 * /baseInfo/updateData/:id:
 *   put:
 *     tags:
 *        - baseInfo
 *     description: 基本信息-修改
 *     requestBody:
 *       required: true  #是否必传
 *       content:
 *         application/json:
 *           schema:     #参数备注
 *             type: object    #参数类型
 *             properties:
 *               name:
 *                 type: string    #参数类型
 *                 description: 性名     #参数描述
 *               sex:
 *                 type: string    #参数类型
 *                 description: 性别     #参数描述
 *           example:        #请求参数样例。
 *             name: "string"
 *             sex: "string"
 *     responses:
 *       200:
 *         description: 响应成功
 
 */
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

module.exports = router;