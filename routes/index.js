const baseInfo = require('./baseInfo')
const job = require('./job')
const fileController = require('./fileController')

module.exports = {
  baseInfo,
  job,
  fileController
}


/**
 * @swagger
 * tags:
 *   - name: baseInfo
 *     description: 简历-基本信息
 *   - name: job
 *     description: 简历-求职岗位
 *   - name: work
 *     description: 简历-工作经验
 * /baseInfo/allData:
 *   get:
 *     tags:
 *        - baseInfo
 *     description: 查询全部简历信息
 *     parameters:
 *       - name: id
 *     responses:
 *       200:
 *         description: 响应成功
 *         schema:
 *           $ref: '#/definitions/Puppy'
 * /baseInfo/upload:
 *   post:
 *     tags:
 *        - baseInfo
 *     description: 上传文件
 *     parameters:
 *       - name: file
 *         in: formdata
 *     responses:
 *       200:
 *         description: 响应成功
 *         schema:
 *           properties:
 *             data:
 *               type: string
*/

 /**
 * @swagger
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
 *           $ref: '#/definitions/Puppy'
 * /baseInfo/updateData/:id:
 *   put:
 *     tags:
 *        - baseInfo
 *     description: 基本信息-修改
 *     parameters:
 *       - name: data
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: 响应成功
 
 */
/**
 * @swagger
 * definitions:
 *   Puppy:
 *           properties:
 *             id:
 *               type: integer
 *             name:
 *               type: string
 *               description: 姓名
 *               example: 张三
 *             sex:
 *               type: integer
 */

/**
 * @swagger
 * /job/data:
 *   get:
 *     tags:
 *        - job
 *     description: 求职岗位-查询
 *     parameters:
 *       - name: id
 *     responses:
 *       200:
 *         description: 响应成功
 *         schema:
 *           $ref: '#/definitions/Puppy'
 * /job/updateData/:id:
 *   put:
 *     tags:
 *        - job
 *     description: 求职岗位-修改
 *     parameters:
 *       - name: data
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: 响应成功
 
 */
/**
 * @swagger
 * definitions:
 *   Puppy:
 *           properties:
 *             id:
 *               type: integer
 *             jobName:
 *               type: string
 *               description: 职位名称
 *               example: 工程师
 */
