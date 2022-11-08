const express = require("express");
const router = express.Router();
const Member = require("../models/member");

// Get all members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one member
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create one member
router.post("/", async (req, res) => {
  const member = new Member({
    name: req.body.name,
    memberTitle: req.body.memberTitle,
  });

  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one member
router.patch("/:id", (req, res) => {
  //
});

// Delete one member
router.delete("/:id", (req, res) => {
  //
});

module.exports = router;
