let mongoose = require('mongoose');
let Schema = mongoose.Schema;


//定义一个baseInfo的结构
let baseInfoSchema = new Schema({
  "name": String,
  "age": Number,
  "sex": String,
  "address":String,
});

module.exports = mongoose.model("BaseInfo", baseInfoSchema, "baseInfo");


