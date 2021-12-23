const { timeStamp } = require('console');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const taskSchema = new Schema({
  title: {
    type :String,
    required: true
  },
  snippet :{
    type :String,
    required: true
  }
}, {timeStamp:true});


const Task = mongoose.model('task', taskSchema);

module.exports = Task;