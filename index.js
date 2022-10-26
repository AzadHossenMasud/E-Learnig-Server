const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const catagories = require("./data/catagories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/catagories", (req, res) => {
  res.send(catagories);
});
app.get("/catagory/:id", (req, res) => {
  const id = req.params.id;
  if (id === "06") {
    res.send(courses);
  } else {
    const category_course = courses.filter(
      (course) => course.category_id === id
    );
    res.send(category_course);
  }
});
app.get("/courses", (req, res) => {
  res.send(courses);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
