const e = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
let URI = "mongodb://127.0.0.1:27017";

exports.mongoConnect = (cb) => {
  MongoClient.connect(URI)
    .then((client) => {
      console.log("connect");
      _db = client.db("melktega");
      cb(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getdb = () => {
  if (_db) {
    return _db;
  } else {
    throw "no database found";
  }
};
