const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const env = require("dotenv").config();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

//routes

const authRoutes = require("./routes/authRoutes");
const profileroutes = require("./routes/profileRoutes");

const app = express();

const PORT = "5000";
const server = http.createServer(app);

const mongoDBStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017/meliktega",
  collection: "sessions",
});

app.use(express.json({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "sessionid",
    resave: false,
    store: mongoDBStore,
    saveUninitialized: false,
    cookie: { secure: true, maxAge: 1000 * 60 * 60 * 3 },
  })
);

//establishing io connection

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const users = [];
io.on("connection", (socket) => {
  console.log(`a user connected with ${socket.id}`);

  // console.log(socket.handshake.username, "sadfsad");
  // for (let [id, socket] of io.of("/").sockets) {
  //   users.push({
  //     userID: id,
  //     username: socket.username,
  //   });
  // }
  socket.on("users", (data) => {
    if (
      !users.some((obj) => {
        return obj.user.email === data.user.email;
      })
    ) {
      users.push(data);
    }

    console.log(users);
    io.emit("users", users);
  });

  socket.on("private-message", (data) => {
    console.log(data);
    const to = data.to.user.userName;
    io.emit("messageResponse", data);
  });
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
