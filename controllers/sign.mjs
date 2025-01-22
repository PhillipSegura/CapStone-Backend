// controllers/signController.mjs
import Sign from "../models/sign.mjs";
import jwt from "jsonwebtoken";

// Create a new user profile
export const createUser = async (req, res) => {
  try {
    const { name, email, age, city, danceStyle, isTeacher } = req.body;

    // Check if the user already exists
    const existingUser = await Sign.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user and save to DB
    const newUser = new Sign({ name, email, age, city, danceStyle, isTeacher });
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Sign in the user
export const signIn = async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await Sign.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Sign-in successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error });
  }
};
