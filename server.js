
import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

connectDB();

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    method:["GET","POST","DELETE"]
}));

app.get("/",(req,res)=>{
    res.send("Welcome to Project");
})

const PORT=8080;

app.use("/api/v1/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is Running On port ${PORT}`.bgCyan.white);
})