import mongoose from 'mongoose';
import colors from 'colors';

const connectDB =async ()=>{
    try {
        const conn=await mongoose.connect("mongodb+srv://WebWizard_2023:project2023@cluster1.ckt58id.mongodb.net/Mess-Management");
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
}

export default connectDB;



