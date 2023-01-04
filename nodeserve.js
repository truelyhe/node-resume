let express = require('express')
//let mongo = require("./mongo/mongo");
let bodyParser = require('body-parser');
const { baseInfo } = require("./routes/index");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

const swaggerOptions = {
  swaggerDefinition: {
      info: {
        title: 'Resume REST API',
        description: "A REST API built with Express and MongoDB. This API provides resume and the context of the characteristic in the resume."
      },
  },
  apis: ["./routes/baseInfo.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/apiDoc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// / 是一级路径
app.use('/baseInfo', baseInfo);

// 监听端口号
app.listen(8888,()=>{
  console.log('localhost:8888')
})
