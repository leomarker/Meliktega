const bodyParser = require("body-parser");
const express = require("express");
const mongoConnect = require("./util/db").mongoConnect;
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = "5000";

app.use(bodyParser.json({ extended: false }));

app.use(authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/melktega")
  .then(() => {
    app.listen(PORT, () => {
      console.log("server runing at port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
