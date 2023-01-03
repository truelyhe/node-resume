let express = require('express')
//let mongo = require("./mongo/mongo");
let bodyParser = require('body-parser');
let baseInfoRouter = require('./routes/baseInfo');

let app = express()
// 处理跨域问题
app.use((req,res,next)=>{
  res.append('Access-Control-Allow-Origin','*')
  res.append('Access-Control-Allow-headers','*')
  next()
})
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//parse application/json
app.use(bodyParser.json());

// / 是一级路径
app.use('/', baseInfoRouter);

// 监听端口号
app.listen(8888,()=>{
  console.log('localhost:8888')
})
