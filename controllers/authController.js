
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import userModelw from "../models/userModelw.js";
import userModela from "../models/userModela.js";


// import JWT from 'jsonwebtoken';



export const registerController = async(req,res) =>{
    try {
         const {username,name,reg,hostel,password} = req.body;

         //validation
         if(!username){
            return res.send({message:'username is Required'})
         }

         if(!name){
            return res.send({message:'Name is Required'})
         }

         if(!reg){
            return res.send({message:'Reg is Required'})
         }

         

         if(!hostel){
            return res.send({message:'Hostel is Required'})
         }


         if(!password){
            return res.send({message:'Password is Required'})
         }

       

         //Check User
         const existingUser1= await userModel.findOne({username})
         const existingUser2= await userModel.findOne({reg})
        


         if(existingUser1||existingUser2){
            return res.status(200).send({
                success:false,
                message:'Already Register please Login',
            })
         }

         //registe user

        const hashedPassword = await hashPassword(password)

        //
        const user= await new userModel({username,name,reg,hostel,password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
    })
            
        }
    };



    export const registerControllerW = async(req,res) =>{
      try {
           const {username,name,cont,hostel,password} = req.body;
  
           //validation
           if(!username){
              return res.send({message:'username is Required'})
           }
  
           if(!name){
              return res.send({message:'Name is Required'})
           }
  
           if(!cont){
              return res.send({message:'Reg is Required'})
           }
  
           
  
           if(!hostel){
              return res.send({message:'Hostel is Required'})
           }
  
  
           if(!password){
              return res.send({message:'Password is Required'})
           }
  
         
  
           //Check User
           const existingUser1= await userModelw.findOne({username})
           const existingUser2= await userModelw.findOne({cont})
          
  
  
           if(existingUser1||existingUser2){
              return res.status(200).send({
                  success:false,
                  message:'Already Register please Login',
              })
           }
  
           //registe user
  
          const hashedPassword = await hashPassword(password)
  
          //
          const user= await new userModelw({username,name,cont,hostel,password:hashedPassword}).save();
  
          res.status(201).send({
              success:true,
              message:'User Registered Successfully',
              user
          })
  
          
      } catch (error) {
          console.log(error)
          res.status(500).send({
              success:false,
              message:'Error in Registration',
              error
      })
              
          }
      };


      export const registerControllerA = async(req,res) =>{
         try {
              const {username,name,cont,hostel,password} = req.body;
     
              //validation
              if(!username){
                 return res.send({message:'username is Required'})
              }
     
              if(!name){
                 return res.send({message:'Name is Required'})
              }
     
              if(!cont){
                 return res.send({message:'Reg is Required'})
              }
     
              
     
              if(!hostel){
                 return res.send({message:'Hostel is Required'})
              }
     
     
              if(!password){
                 return res.send({message:'Password is Required'})
              }
     
            
     
              //Check User
              const existingUser1= await userModela.findOne({username})
              const existingUser2= await userModela.findOne({cont})
             
     
     
              if(existingUser1||existingUser2){
                 return res.status(200).send({
                     success:false,
                     message:'Already Register please Login',
                 })
              }
     
              //registe user
     
             const hashedPassword = await hashPassword(password)
     
             //
             const user= await new userModela({username,name,cont,hostel,password:hashedPassword}).save();
     
             res.status(201).send({
                 success:true,
                 message:'User Registered Successfully',
                 user
             })
     
             
         } catch (error) {
             console.log(error)
             res.status(500).send({
                 success:false,
                 message:'Error in Registration',
                 error
         })
                 
             }
         };
   
//    //  login


export const logincontroller = async (req,res)=>{
    try {
        const {username,password}= req.body

        //validation

        if(!username||!password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            });

        }

        //check user
        const user=await userModel.findOne({username})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not Registered'
            });
        }

        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                status:false,
                message:'Invalid Password'
            });
        }

        //token

        // const token = await JWT.sign({_id:user._id},process.env.REACT_APP_JWT_SECRET,{
        //     expiresIn:'7d',
        //  });

         res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role

            },

            // token,
         });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }

};




export const logincontrollerW = async (req,res)=>{
    try {
        const {username,password}= req.body

        //validation

        if(!username||!password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            });

        }

        //check user
        const user=await userModelw.findOne({username})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not Registered'
            });
        }

        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                status:false,
                message:'Invalid Password'
            });
        }

        //token

        // const token = await JWT.sign({_id:user._id},process.env.REACT_APP_JWT_SECRET,{
        //     expiresIn:'7d',
        //  });

         res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role

            },

            // token,
         });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }

};




export const logincontrollerA = async (req,res)=>{
    try {
        const {username,password}= req.body

        //validation

        if(!username||!password){
            return res.status(404).send({
                success:false,
                message:'Invalid Email or Password'
            });

        }

        //check user
        const user=await userModela.findOne({username})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not Registered'
            });
        }

        const match =await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                status:false,
                message:'Invalid Password'
            });
        }

        //token

        // const token = await JWT.sign({_id:user._id},process.env.REACT_APP_JWT_SECRET,{
        //     expiresIn:'7d',
        //  });

         res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role

            },

            // token,
         });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }

};












