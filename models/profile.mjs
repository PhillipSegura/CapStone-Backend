import mongoose from "mongoose";

// Define the schema for the profile, representing user data
const profileSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's name (required)
  email: { type: String, required: true, unique: true }, // Unique email (required)
  age: { type: Number, required: true }, // User's age (required)
  city: { type: String, required: true }, // City where the user is located
  danceStyles: [{ type: String }], // List of dance styles the user is interested in
  isTeacher: { type: Boolean, default: false }, // Whether the user is a teacher (default: false)
});

// Add a new dance style to the profile
profileSchema.methods.addDanceStyle = async function (danceStyle) {
  this.danceStyles.push(danceStyle);
  await this.save();
};

// Remove a specific dance style from the profile
profileSchema.methods.removeDanceStyle = async function (danceStyle) {
  this.danceStyles = this.danceStyles.filter((style) => style !== danceStyle);
  await this.save();
};

// Export the Profile model for use in other parts of the application
const Profiles = mongoose.model("Profile", profileSchema);
export default Profiles;
