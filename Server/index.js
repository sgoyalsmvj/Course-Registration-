const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const students = require("./models/student");
const faculties = require("./models/faculty");
const admins = require("./models/admin");
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


app.get('/profile/:id',async(req,res)=>{
    const {id} = req.params;
    const student = await students.findById(id);
    const admin = await admins.findById(id);
    const faculty = await faculties.findById(id);
    if (student) {
       res.json(student);
    } else if (faculty) {
        res.json(faculty);
    } else {
        res.json(admin);
    }
})
app.listen(3000, () => {
  console.log("you are connected to localhost 3000!");
});
