const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const students = require("./models/student");
const faculties = require("./models/faculty");
const admins = require("./models/admin");
const courses = require("./models/course");
const jwtSecret = "asdfghjklqwertyuio";

function passCheck(entity, password, res) {
  const passOk = entity.password == password;
  if (passOk) {
    jwt.sign(
      {
        username: entity.username,
        id: entity._id,
      },
      jwtSecret,
      {},
      (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token, {
            secure: true,
            sameSite: "none",
          })
          .json(entity);
      }
    );
  } else {
    res.json("password not matched");
  }
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());

mongoose
  .connect("mongodb+srv://Saurabh:Chillbro@cluster0.gqxrwyj.mongodb.net/lnmiit")
  .then(() => {
    console.log("mongo connected");
  });

app.post("/", async (req, res) => {
  const { username, password } = req.body;
  const student = await students.findOne({ username });
  const admin = await admins.findOne({ username });
  const faculty = await faculties.findOne({ username });
  if (student) {
    passCheck(student, password, res);
  } else if (faculty) {
    passCheck(faculty, password, res);
  } else if (admin) {
    passCheck(admin, password, res);
  } else {
    res.json("not found");
  }
});
app.post('/logout',(req,res)=>{
  res.cookie("token",' ').json(true);
});

app.get("/profile", async(req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      console.log("matched");
      let entity;
      const student = await students.findById(userData.id);
      const faculty = await faculties.findById(userData.id);
      const admin = await admins.findById(userData.id);
      if(student)entity = student;
      else if(!student){
        entity = faculty;
      }
      else if(!faculty){
        entity = admin
      }
      res.json(entity);
    });
  } else {
    res.json(null);
  }
});

// courses.insertMany([
//   {name:'COA',branch:'CSE',elective:false,semester:3,faculty:['Pretty Singh','Polumi Dalapati']},
//   {name:'IDBMS',branch:'CSE',elective:false,semester:3,faculty:['xyz']}
// ])

app.get("/coursereg", async (req, res) => {
  const {token} = req.cookies;
  console.log(token);
  const result = await courses.find({branch:'CSE'});
  res.json(result);
});
app.listen(3000, () => {
  console.log("you are connected to localhost 3000!");
});
