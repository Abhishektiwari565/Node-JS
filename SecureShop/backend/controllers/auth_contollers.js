import {authModel} from '../models/auth_models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import {sendOtpMail} from '../services/otp_services.js'

dotenv.config();
export const register = async (req, res) => {
    try {
        console.log("Registration request received:", req.body);
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            console.log("Missing required fields");
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("Checking if user exists:", email);
        const existUser = await authModel.findOne({ email });
        if (existUser) {
            console.log("User already exists:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        console.log("Hashing password");
        const hashed = await bcrypt.hash(password, 12);

        console.log("Creating user");
        const user = await authModel.create({
            name,
            email,
            password: hashed
        });

        console.log("User created successfully:", user.email);
        res.status(201).json({ message: "User registered successfully", user: { name: user.name, email: user.email } });

    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

export const Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await authModel.findOne({ email });

        if (!user) {
            return res.json({ message: "user not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ message: "invalid password" });
        }

        // 🔥 Generate OTP here
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const expireOtp = new Date(Date.now() + 2 * 60 * 1000);

        user.otp = otp;
        user.expireOtp = expireOtp;
        await user.save();

        // 🔥 Send email
        await sendOtpMail(email, otp);

        res.json({ message: "OTP sent to your email" });

    } catch (err) {
        res.json({ message: "login failed", err: err.message });
    }
};

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ message: "Email and OTP are required" });
        }

        const user = await authModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.expireOtp || new Date() > user.expireOtp) {
            return res.status(400).json({ message: "OTP expired" });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        user.otp = null;
        user.expireOtp = null;
        await user.save();

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ message: "OTP verified & login successful", token });

    } catch (err) {
        console.error("Verify OTP error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};