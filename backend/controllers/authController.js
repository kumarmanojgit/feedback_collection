
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, email, password: hashedPassword });
    await newAdmin.save();
    return res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Email does not exist" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.json({
      token,
      admin: { id: admin._id, username: admin.username, email: admin.email },
    });
  } catch (error) {
    return res.status(500).json({ message: "Login failed", error: error.message });
  }
};
