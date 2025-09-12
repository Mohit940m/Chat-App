import { use } from "react";
import User from "../models/User.model.js"
import jwt from "jsonwebtoken"

//Middleware
export const protectRoute = async (req,res,next)=>{
    try {
        const token=req.headers.token;
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(400).json({
                message:"User not found",
                success:false
            })
        }

        req.user=user;
        next()
    } catch (error) {
        res.status(400).json({
                message:error.message,
                success:false
            })
    }
}

