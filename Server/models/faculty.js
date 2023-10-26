const mongoose = require('mongoose');


const facultySchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

const facultyModel = mongoose.model("Faculty",facultySchema);
module.exports = facultyModel;
