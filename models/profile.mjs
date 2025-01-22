import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  danceStyles: { type: [String], default: [] },
  isTeacher: { type: Boolean, default: false }, // New field to indicate teacher status
});

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;
