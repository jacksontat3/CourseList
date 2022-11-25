//require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// -sync the database

const db = require("./app/models");

db.sequelize.sync({force: true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "SE IV Project 2: Node Backend - Server running" });
});
// include the routes
require("./app/routes/course.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3015;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});