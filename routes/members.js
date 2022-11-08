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
router.get("/:id", getMember, (req, res) => {
  res.send(res.member.name);
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

async function getMember(req, res, next) {
  let member;

  try {
    member = await Member.findById(req.params.id);
    if (member == null) {
      return res.status(404).json({ message: "Cannot find member" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.member = member;
  next();
}

module.exports = router;
