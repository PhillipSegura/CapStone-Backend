import Profile from "../models/profile.mjs";

// Controller to search for teachers by dance style and city
export const searchTeachers = async (req, res) => {
  try {
    const { danceStyle, city } = req.query;

    // Build a query object based on the parameters provided
    const query = { isTeacher: true };
    if (danceStyle) query.danceStyles = { $in: [danceStyle] };
    if (city) query.city = city;

    const teachers = await Profile.find(query);

    if (teachers.length === 0) {
      return res
        .status(404)
        .json({ message: "No teachers found matching the criteria." });
    }

    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
