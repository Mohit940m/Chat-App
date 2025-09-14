

import { generateToken } from "../lib/utils.js";
import User from "../models/User.model.js";
import cloudinary from "../lib/cloudinary.js";
import bcrypt from "bcryptjs"

export const signUp = async (req, res) => {
    const { fullName, email, password, bio } = req.body;

    try {
        if (!fullName || !email || !password || !bio) {
            return res.status(400).json({
                success: false,
                message: "Missing fields"
            })
        }

        const user = await User.findOne({ $or: [{ email }, { fullName }] })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            fullName,
            email, bio,
            password: hashedPassword
        })

        const createdUser = await User.findById(newUser._id).select("-password")



        if (!createdUser) {
            return res.status(500).json({
                success: false,
                message: "User creation failed"
            })
        }

        const token = generateToken(createdUser._id)

        res.status(200).json({
            success: true,
            userData: createdUser,
            message: "Account Created Successfully",
            token
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"

            })
        }

        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(400).json({
                success: false,
                message: "User doesnot exist"

            })

        }

        const isPasswordCorrect = await bcrypt.compare(password, userData.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"

            })
        }

        const token = generateToken(userData._id)
        const userResponse = userData.toObject();
        delete userResponse.password;

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            userResponse

        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const checkAuth=async(req,res)=>{
    res.json({
        success:true,
        user:req.user
    })
}

export const updateProfile = async (req, res) => {

    try {
        const { profilePic, bio, fullName } = req.body;

        const userId = req.user._id;
        let updatedUser;

        if (!profilePic) {
            updatedUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true })
        }
        else {
            const upload = await cloudinary.uploader.upload(profilePic);
            updatedUser = await User.findByIdAndUpdate(userId, { profilePic: upload.secure_url, bio, fullName }, { new: true })
        }
        return res.status(200).json({
            success: true,
            user: updatedUser
        })
    } catch (error) {
        res.status(300).json({
            success: false,
            message: error.message
        })

    }
}

