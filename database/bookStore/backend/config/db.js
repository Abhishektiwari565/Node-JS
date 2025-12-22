import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bookstore")
        console.log("mongodb connected !!")
    } catch (err) {
        console.log("DB connection failed ", err)
    }
}
