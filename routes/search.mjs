import express from "express";
import { searchTeachers } from "../controllers/search.mjs";

const router = express.Router();

// Route for searching teachers by dance style and city
router.get("/", searchTeachers);

export default router;
