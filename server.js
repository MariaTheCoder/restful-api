const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Connect to database
mongoose.connect("mongodb://localhost/members", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database..."));

app.listen(port, () => console.log("Server started..."));
