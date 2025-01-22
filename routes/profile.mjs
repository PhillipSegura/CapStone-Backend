import express from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  addDanceStyle,
  removeDanceStyle,
  getTeachers,
} from "../controllers/profile.mjs";

const router = express.Router();

// Profile CRUD routes
router.post("/", createProfile);
router.get("/", getAllProfiles);
router.get("/:id", getProfileById);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

// Dance styles routes
router.post("/:id/dance-styles", addDanceStyle);
router.delete("/:id/dance-styles", removeDanceStyle);

// Get all teachers
router.get("/teachers", getTeachers);

export default router;
