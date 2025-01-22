import express from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
  addDanceStyle,
  removeDanceStyle,
  seedProfiles,
} from "../controllers/profile.mjs";

const router = express.Router();

// Route for creating a new profile
router.post("/", createProfile);

// Route for fetching all profiles
router.get("/", getAllProfiles);

// Route for fetching a single profile by ID
router.get("/:id", getProfileById);

// Route for updating an existing profile
router.put("/:id", updateProfile);

// Route for deleting a profile
router.delete("/:id", deleteProfile);

// Route for adding a dance style to a profile
router.post("/:id/danceStyles", addDanceStyle);

// Route for removing a dance style from a profile
router.delete("/:id/danceStyles", removeDanceStyle);

// Route for seeding the database with sample profiles
router.post("/seed", seedProfiles);

export default router;
