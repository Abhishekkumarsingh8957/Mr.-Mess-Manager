import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      username:{
        type:String,
        required:true,
        trim:true
      },

      name:{
        type:String,
        required:true,
        trim:true
      },

      reg:{
        type:String,
        unique:true,
        required:true
      },

      
      hostel:{
        type:String,
        required:true
      },

    
      password:{
        type:String,
        required:true
      },


},
{timestamps:true
})



export default mongoose.model('user',userSchema);


