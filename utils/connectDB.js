import mongoose from "mongoose";


const connectDB = async () => await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default connectDB;
