import { status } from 'init'
import { userCollection } from '../models/user_models.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

// export const addUser=async(req,res)=>{
//     try{
//         await userCollection.create(req.body);
//         return res.json({status:true,message:"user added successfully"});
//     }catch(err){
//         res.json({status:false,message:err.message});
//     }
// }

export const updateUser = async (req, res) => {
    const { email } = req.body;
    try {
        const user=await userCollection.updateOne({ email }, { $set: req.body });
        const token = jwt.sign({ ...user }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        res.cookie("auth_token", token, { maxAge: 1000 * 60 * 60, httpOnly: true, sameSite: "lax", secure: false });
        return res.json({ status: true, message: "user updated successfully" });
        console.log(req.body);
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const user = await userCollection.find()
        return res.json({ status: true, user: user });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}

export const getCurrentUser = async (req, res) => {
    try {
        const token = req.cookies.auth_token;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded._doc);
        return res.json({ status: true, message: "user fetched successfully !", user: decoded });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}