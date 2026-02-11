
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
    try {
        const token = req.cookies.auth_token;

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const { _id, ...updateData } = req.body;
        const updatedUser = await userCollection.findByIdUpdate(
            decoded.id,
            { $set: req.body },
            { new: true }
        );

        return res.json({
            status: true,
            message: "User updated successfully",
            user: updatedUser
        });

    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
};

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
         const user = await userCollection.findById(decoded.id);
        return res.json({ status: true, message: "user fetched successfully !", user: user });
    } catch (err) {
        return res.json({ status: false, message: err.message });
    }
}

export const deleteUser=async(req,res)=>{
    const id=req.query.id;
    try{
        await userCollection.findByIdAndDelete(id);
        return res.json({status:true,message:"Employee deleted successfully!!"});
    }catch(err){
        return res.json({status:false,message:err.message})
    }
}