const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
})
const adminModel = mongoose.model("Admin",adminSchema);
module.exports = adminModel;
