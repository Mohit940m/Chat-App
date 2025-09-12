import mongoose from "mongoose";

const connectDB = async()=>{
   try {
     const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
     console.log("Server is conected with DB")
     console.log(connectionInstance.connection.host)
   } catch (error) {
    console.log(error)
    
   }
}

export default connectDB