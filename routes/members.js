const express = require("express");
const router = express.Router();

// Get all members
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get one member
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create one member
router.post("/", (req, res) => {
  //
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
