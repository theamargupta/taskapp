const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


const prashant = new User({
  name: "prasha   nt   ",
  email: "amAAAAar@gmail.com",
  password: "dsadfskkl2211kmcd",
  age: 9,
  likefruit: true,
});

prashant
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
