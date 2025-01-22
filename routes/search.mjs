import express from "express";
import { searchTeachers } from "../controllers/search.mjs";

const router = express.Router();

// Route to search teachers by dance style and city
router.get("/", searchTeachers);

export default router;
