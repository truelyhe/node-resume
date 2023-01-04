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
 *       - name: status
 *       - name: query
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
 */