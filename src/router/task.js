const express = require("express");
const router = new express.Router();
const Task = require("../model/task");

// create Task
router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(201).send(task);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // read  Task
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // read  Indiviual
  router.get("/tasks/:id", async (req, res) => {
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
  router.patch("/tasks/:id", async (req, res) => {
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
  
  //delete a task
  router.delete("/tasks/:id", async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  module.exports = router;