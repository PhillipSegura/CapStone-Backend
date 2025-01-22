import Profile from "../models/profile.mjs";

// Controller to create a new profile
export const createProfile = async (req, res) => {
  try {
    const { name, email, age, city, danceStyles, isTeacher } = req.body;
    const profile = new Profile({
      name,
      email,
      age,
      city,
      danceStyles,
      isTeacher,
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to get all profiles
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a specific profile by ID
export const getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a profile
export const updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    Object.assign(profile, updates);
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to delete a profile
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to add a dance style to a profile
export const addDanceStyle = async (req, res) => {
  try {
    const { danceStyle } = req.body;
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    profile.danceStyles.push(danceStyle);
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to remove a dance style from a profile
export const removeDanceStyle = async (req, res) => {
  try {
    const { danceStyle } = req.body;
    const profile = await Profile.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    profile.danceStyles = profile.danceStyles.filter(
      (style) => style !== danceStyle
    );
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller to get all teachers
export const getTeachers = async (req, res) => {
  try {
    const teachers = await Profile.find({ isTeacher: true });
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
