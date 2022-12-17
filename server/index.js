const bodyParser = require("body-parser");
const express = require("express");
const mongoConnect = require("./util/db").mongoConnect;

const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = "8080";

app.use(bodyParser.json({ extended: false }));

app.use(authRoutes);

mongoConnect((client) => {
  app.listen(PORT, () => {
    console.log("server listening at port 8080");
  });
});
