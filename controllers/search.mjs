import Profile from "../models/profile.mjs";

// Search for teachers based on dance style and city
export const searchTeachers = async (req, res) => {
  try {
    const { danceStyle, city } = req.query;

    // Query database for profiles that match the criteria
    const teachers = await Profile.find({
      isTeacher: true,
      city: city || { $exists: true }, // Optional filter for city
      danceStyles: danceStyle ? { $in: [danceStyle] } : { $exists: true }, // Optional filter for dance style
    });

    res.status(200).json(teachers); // Respond with matching teacher profiles
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
