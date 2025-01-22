// imported dependencies
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
dotenv.config();
// import conn.mjs so that I connect to my db
import db from "./db/conn.mjs";

//set up port
const PORT = process.env.PORT || 5052;

//create app
const app = express();

// Middleware
app.use(logger("dev"));

//ROUTES
app.get("/", (req, res) => {
  res.send("<hi>Welcome to my the DanceCircle</h1>");
});

app.get("/*", (req, res) => {
  res.redirect("/");
});

//Global error handling after the routes
app.use((err, _req, res, next) => {
  res.status(500).send("there was an issue on the server");
});

// Start express server
app.listen(PORT, () => {
  console.log("Server is runing on port: ${PORT}");
});
