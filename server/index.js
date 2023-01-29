const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const env = require("dotenv").config();

//routes

const authRoutes = require("./routes/authRoutes");
const profileroutes = require("./routes/profileRoutes");

const app = express();

const PORT = "5000";
const server = http.createServer(app);

app.use(express.json({ extended: false }));
app.use(cors());

//establishing io connection

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`a user connected with ${socket.id}`);
});

app.use(authRoutes);
app.use(profileroutes);

//connection to mongodb

mongoose
  // .connect(process.env.MongoURI)
  .connect("mongodb://127.0.0.1:27017/meliktega")
  .then(() => {
    server.listen(PORT, () => {
      console.log("server running at port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
