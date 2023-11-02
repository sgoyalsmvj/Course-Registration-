const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  branch: String,
  elective: Boolean,
  semester: Number,
  faculty: Array,
});

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;

