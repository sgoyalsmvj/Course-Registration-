const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    rollno:String,
    year:Number,
    branch:String
})

const studentModel = mongoose.model("Student",studentSchema);
module.exports = studentModel;
