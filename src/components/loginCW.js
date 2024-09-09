import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../design/login.css";

import axios from 'axios';



const Loginw = () => {

 const [username,setUsername]=useState("");
 
 const [password,setPassword]=useState("");

 const navigate=useNavigate();

 const handleSubmit= async (e)=>{
  e.preventDefault();
  console.log(username,password);
  

  try {
    const res = await axios.post('http://localhost:8080/loginCW', {
      username,
      
      password
    });
    if (res.data.message === "Login successful") {
      navigate("/chiefwarden", { state: { userData: res.data.user } });
      console.log(res.data.user)
      console.log('successful');
    } else {
      
      console.error(res.data.message);
      alert("user not registerd Login first")
    }
  } catch (error) {
    console.error(error);

};


}



  return (

  

    <form onSubmit={handleSubmit} >
   
    <div className="form-container">
      <label htmlFor="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
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

      <button type="submit" >LOGIN</button>

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

export default Loginw
