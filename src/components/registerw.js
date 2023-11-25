import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../design/login.css";
// import Student from './homepage/student';
import axios from 'axios';


const Registerw = () => {

 const [username,setUsername]=useState("");
 const [name,setName]=useState("");
 const [contact,setCont]=useState("");
 const [hostel,setHostel]=useState("");
 const [password,setPassword]=useState("");

 const navigate=useNavigate();

 const handleSubmit= async (e)=>{
  e.preventDefault();
  console.log(username,name,contact,hostel,password);
  try {
    const res = await axios.post('http://localhost:8080/registerCW', {
      username,
      name,
      contact,
      hostel,
      
      password
    });
    if (res.data.success) {
      
      alert("successfully registered U can login now")
    console.log('successful')
  } else {
    
  }
} catch (error) {
  console.log(error);
  // toast.error("Something went wrong");
}

 
};


 



  return (

  

    <form onSubmit={handleSubmit} >
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    </div>
    <div className="form-container">
      <label htmlFor="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
        
      />


        <label htmlFor="name"><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
       
      />
        <label htmlFor="reg. no"><b>Conatct No.</b></label>
      <input
        type="text"
        placeholder="Enter Registration Number "
        value={contact}
        onChange={(e)=>setCont(e.target.value)}
        required
       
      />

<label htmlFor="psw"><b>Hostel</b></label>
      <input
        type="text"
        placeholder="Enter Hostel Name"
        value={hostel}
        onChange={(e)=>setHostel(e.target.value)}
        required
        
      />

      <label htmlFor="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        
      />

      <button type="submit" >Register</button>

      <label>
        <input
          type="checkbox"
          value={username}
          
        />
        Remember me
      </label>
    </div>

    <div className="form-container" style={{ backgroundColor: '#f1f1f1' }}>
      <button type="button" className="cancelbtn" >
        Cancel
      </button>
      <span className="psw">
        Forgot <a href="#">password?</a>
      </span>
    </div>
   </form>
   
 



  )
}

export default Registerw