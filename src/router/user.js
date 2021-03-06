const express = require("express");
const router = new express.Router();
const User = require("../model/user");

// create Users
router.post("/users", async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      res.status(201).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // read  Users
  router.get("/users", async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // read Indiviual Users
  router.get("/users/:id", async (req, res) => {
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
  router.patch("/users/:id", async (req, res) => {
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
  
  //delete a user
  router.delete("/users/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
module.exports = router;
