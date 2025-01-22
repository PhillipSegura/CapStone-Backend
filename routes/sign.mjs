// routes/signRoutes.mjs
import express from "express";
import { createUser, signIn } from "../controllers/signController.mjs";

const router = express.Router();

// POST route for user registration
router.post("/signup", createUser);

// POST route for user sign-in
router.post("/signin", signIn);

export default router;
