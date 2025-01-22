// Imported dependencies
import express from "express";
import dotenv from "dotenv";
import logger from "morgan";

// Initialize dotenv to load environment variables
dotenv.config();

// Import the database connection
import db from "./db/conn.mjs";

// Importing routes
import profileRouter from "./routes/profile.mjs";

// Set up port
const PORT = process.env.PORT || 5052;

// Create the Express app
const app = express();

// Middleware
app.use(logger("dev")); // Logs incoming requests for debugging
app.use(express.json()); // Parses JSON request bodies

// Root route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to DanceCircle</h1>");
});

// API routes
app.use("/api/profiles", profileRouter);
app.use("api/sign", signRouter);
app.use("api/search", searchRouter);

// Handle undefined routes and redirect to the root
app.get("/*", (req, res) => {
  res.redirect("/");
});

// Global error handling middleware
app.use((err, _req, res, _next) => {
  console.error("Global error:", err); // Log the error for debugging
  res.status(500).send("There was an issue on the server.");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
s;
