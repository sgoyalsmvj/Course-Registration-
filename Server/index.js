const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
const students = require('./models/student');
const faculties = require('./models/faculty');
const admin = require('./models/admin');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose.connect('mongodb+srv://Saurabh:Chillbro@cluster0.gqxrwyj.mongodb.net/lnmiit').then(() => {
    console.log("mongo connected");
});

app.use(cors(corsOptions));

app.post('/',async(req,res)=>{
    const {username,password} = req.body;
    const student =await students.findOne({username});
    console.log(student);

})
app.listen(3000,()=>{
    console.log('you are connected to localhost 3000!')
})
