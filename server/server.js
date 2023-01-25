const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const { Schema } = mongoose;
const courseSchema = new Schema({
  image: String,
  name: String,
  title: String,
  author: String,
  authorImg: String,
  price: Number,
});
const Courses = mongoose.model("courses", courseSchema);

app.get("/courses", (req, res) => {
  Courses.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(505).json({ message: err });
    }
  });
});

app.get("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findById(id, (err, doc) => {
    if (!err) {
      if (doc) {
        res.send(doc);
      } else {
        res.status(404).json({ message: "undefined course" });
      }
    } else {
      res.status(505).json({ message: err });
    }
  });
});

app.delete("/courses/:id", (req, res) => {
  const { id } = req.params;
  Courses.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "course deleted" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});

app.post("/courses", (req, res) => {
  let course = new Courses({
    image: req.body.image,
    name: req.body.name,
    title: req.body.title,
    author: req.body.author,
    authorImg: req.body.authorImg,
    price: req.body.price,
  });
  course.save();
  res.status(200).json({ message: "course added" });
});

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/courses`);
    });
  }
});
