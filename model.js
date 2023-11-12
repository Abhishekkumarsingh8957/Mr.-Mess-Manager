const mongoose=require('mongoose')
const express=require("express");
const app=express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/loginpage", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("failed");
  });

  const student = new mongoose.Schema({
    hostalname: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    reg_no:{
      type: Number,
      required: true,
      trim:true
    }
  });
  
  const studentData = new mongoose.model("studentData", student);
  
  var accountant = new mongoose.Schema({
    hostalname: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone_no:{
      type: Number,
      required: true,
      trim:true
    }
  });
  const accountantData = new mongoose.model("accountantData", accountant);
  
  var cheifWarden = new mongoose.Schema({
    hostalname: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    phone_no:{
      type: Number,
      required: true,
      trim:true
    }
  });
  const cheifWardenData = new mongoose.model("cheifWardenData", cheifWarden);
  
  module.exports = {
    studentDb: studentData,
    accountantDb: accountantData,
    cheifWardenDb: cheifWardenData,
  };
  