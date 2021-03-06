const express = require("express");
const app = express();

const userRouter = require("./router/user")
const taskRouter = require("./router/task")
require("./db/mongoose");
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter)
app.use(taskRouter)


//to create a server
app.listen(port, () => {
  console.log("https://localhost:3000");
});