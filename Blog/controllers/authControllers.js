import { authModel } from '../models/authModels.js'
import bcrypt from 'bcrypt'
import { sendMail } from '../services/services.js'
import { verifyOtp } from '../controllers/otpControllers.js'

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        await authModel.create({ email, password: hashedPassword });
        res.json({ message: "user signup successfully !" });
    } catch (err) {
        res.json({ message: "signup failed !" });
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await authModel.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user) {
            res.json({ message: "user not found" })
        }
        if (!isMatch) {
            return res.json({ message: "password is invalid" });
        }

        await sendMail(email);
        res.json({ message: "otp sent to your email", email });

    } catch (err) {
        res.json({ message: "signin failed !" });
    }
}

export const signout = async (req, res) => {
    res.clearCookie("auth", { httpOnly: true, secure: false, sameSite: "strict" });
    res.json({ message: "user logout" });
}

export const blogPage = async (req, res) => {
    const user = await authModel.find();
    res.json({ message: "Blog Page", user });
}