const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BASE_USERS_H_H", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: { type: String },
  email: { type: String },
  comment:{ type: String}
});

module.exports = User;
