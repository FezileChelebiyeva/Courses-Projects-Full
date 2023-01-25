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

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, (err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/courses`);
    });
  }
});
