const express = require("express");
const app = express();

const User = require("./model/user");
const Task = require("./model/task");
require("./db/mongoose");
const port = process.env.PORT || 3000;

app.use(express.json());

// create Users
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// read  Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// read Indiviual Users
app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

//update a indiviual user
app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allow = ["name", "email", "password", "age"];
  const isValid = updates.every((update) => allow.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "invalid operastin" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// create Task
app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

// read  Task
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// read  Indiviual
app.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

//update a indiviual user
app.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allow = ["description", "completed"];
  const isValid = updates.every((update) => allow.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "invalid operation" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

//to create a server
app.listen(port, () => {
  console.log("https://localhost:3000");
});
//16 video
