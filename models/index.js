const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Accessory = require('./Accessory');

const cubeSchema = schema({
  name: {
    type:String, 
    required:true,
  }, 
  description:{
    type:String, 
    required:true,
    maxlength:200
  }, 
  imageUrl:{
    type:String, 
    required:true, 
  }, 
  level:{
    type:Number, 
    required:true, 
    min:1, 
    max:6
  }, 
  accessories:[{
    type: schema.Types.ObjectId, 
    ref:'Accessory'
  }], 

  creatorId:{
    type:String, 
    required:true
  }
})

module.exports = mongoose.model('Cube', cubeSchema);