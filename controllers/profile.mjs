import Profiles from "../models/profile.mjs";

// Create a new profile
export const createProfile = async (req, res) => {
  try {
    const { name, email, age, city, danceStyles, isTeacher } = req.body;
    const profile = new Profiles({
      name,
      email,
      age,
      city,
      danceStyles,
      isTeacher,
    });
    await Profiles.save();
    res.status(201).json(profile); // Respond with the newly created profile
  } catch (error) {
    res.status(400).json({ error: error.message }); // Handle validation or other errors
  }
};

// Retrieve all profiles in the database
export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profiles.find();
    res.status(200).json(profiles); // Respond with all profiles
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle server errors
  }
};

// Retrieve a single profile by its unique ID
export const getProfileById = async (req, res) => {
  try {
    const profile = await Profiles.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json(profile); // Respond with the specific profile
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing profile
export const updateProfile = async (req, res) => {
  try {
    const { name, email, age, city, danceStyles, isTeacher } = req.body;
    const profile = await Profiles.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    // Update the profile fields only if provided
    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.age = age || profile.age;
    profile.city = city || profile.city;
    profile.danceStyles = danceStyles || profile.danceStyles;
    profile.isTeacher = isTeacher !== undefined ? isTeacher : profile.isTeacher;

    await Profiles.save();
    res.status(200).json(profile); // Respond with the updated profile
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a profile from the database
export const deleteProfile = async (req, res) => {
  try {
    const profile = await Profiles.findByIdAndDelete(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new dance style to a specific profile
export const addDanceStyle = async (req, res) => {
  try {
    const { danceStyle } = req.body;
    const profile = await Profiles.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    await Profiles.addDanceStyle(danceStyle);
    res.status(200).json(profile); // Respond with the updated profile
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a dance style from a specific profile
export const removeDanceStyle = async (req, res) => {
  try {
    const { danceStyle } = req.body;
    const profile = await Profiles.findById(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    await Profiles.removeDanceStyle(danceStyle);
    res.status(200).json(profile); // Respond with the updated profile
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Seed the database with sample profiles
export const seedProfiles = async (req, res) => {
  console.log("i am a seed");
  const profiles = [
    {
      name: "Big Deadend",
      email: "BigDeadend@gmail.com",
      age: 30,
      city: "Phoenix",
      danceStyles: ["Krump"],
      isTeacher: true,
    },
    {
      name: "Leah",
      email: "Leah@gmail.com",
      age: 32,
      city: "Mesa",
      danceStyles: ["CambellLocking"],
      isTeacher: true,
    },
    {
      name: "Rae Rae",
      email: "RaeRae@gmail.com",
      age: 33,
      city: "Mesa",
      danceStyles: ["House"],
      isTeacher: true,
    },
    {
      name: "King Charles",
      email: "KingCharles@gmail.com",
      age: 30,
      city: "Phoenix",
      danceStyles: ["ChicagoFootwork"],
      isTeacher: true,
    },
  ];
  console.log(profiles);
  await Profiles.create(profiles); // Insert sample profiles
  res.status(201).json({ message: "Profiles seeded successfully" });
};

export default {
  seedProfiles,
  getAllProfiles,
  deleteProfile,
  createProfile,
  getProfileById,
  updateProfile,
  addDanceStyle,
  removeDanceStyle,
};
