// models/sign.mjs
import mongoose from "mongoose";

const signSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    danceStyle: {
      type: String,
      required: true,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sign", signSchema);
