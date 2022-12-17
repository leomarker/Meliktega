const getdb = require("../util/db").getdb;

class User {
  constructor(email, password, confirmPassword) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
  save() {
    const db = getdb();
    return db
      .collection("user")
      .insertOne(this)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  findOne(email) {
    const db = getdb();
    return db.collection("user").find({ email: email }).next();
    //   .then((res) => {
    //     console.log("model");
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}

module.exports = User;
