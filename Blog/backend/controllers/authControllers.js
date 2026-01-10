import { authModel } from '../models/authModels.js'
import bcrypt from 'bcrypt'
import { sendMail } from '../services/services.js'
import { verifyOtp } from './otpControllers.js'


export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        await authModel.create({ email, password: hashedPassword });
        res.json({ message: "user signup successfully !" });
    } catch (err) {
        console.log("Signup Error:", err);
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
        res.json({ message: "signin failed !",err });
    }
}

export const signout = (req, res) => {
  res.clearCookie("auth", {
    httpOnly: true,
    secure: false,
    sameSite: "lax"
  });

  res.json({ message: "signout successful" });
};
