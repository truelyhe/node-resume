let express = require('express');
let router = express.Router();
const formidable=require('formidable')
const path = require('path')
let fs = require('fs')

//上传
router.post('/upload',(req,res,next)=>{
  const form = formidable({
    multiples: true,
    uploadDir: path.join(__dirname, '../static/upload'),
    keepExtensions: true,//显示后缀，不然文件没有后缀
  })
  form.parse(req, function(err, fields, files) {
    if(err) {
      next(err);
      return;
    }
    const avatarUrl="upload/"+ files.file.newFilename;//文件夹，包含上传文件
    res.send({
      code: 200,
      data: avatarUrl,
      msg:'上传成功'
    })
  })
})

//访问图片
router.get('/getImage/:path/:name', function(req, res) {
  let path = req.params.path
  let name = req.params.name
  fs.readFile(`./static/${path}/${name}`, function(err, data) {//fs 模块中的相对位置是以根目录为基准
    res.end(data)
  })
})

module.exports = router;