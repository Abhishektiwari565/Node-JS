
import { otpModel } from '../models/otpModels.js'

export const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    const data = await otpModel.findOne({ email, otp })
    if (!data) {
        return res.json({ message: "otp mismatched" });
    }
    if (data.expiry < new Date(Date.now())) {
        return res.json({ message: "otp expired" });
    }
    res.cookie("auth", "true", {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    });

    res.json({ message: "otp verified and signin successfully" });
}