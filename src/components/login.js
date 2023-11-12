import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../design/login.css";
import Student from './homepage/student';


const Login = () => {

          

 



  return (

  

    <form >
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    </div>
    <div className="container">
      <label htmlFor="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        
      />
        <label htmlFor="name"><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter name"
       
      />
        <label htmlFor="reg. no"><b>Reg.Number</b></label>
      <input
        type="text"
        placeholder="Enter Registration Number "
       
      />

<label htmlFor="psw"><b>Hostel</b></label>
      <input
        type="text"
        placeholder="Enter Hostel Name"
        
      />

      <label htmlFor="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        
      />

      <button type="submit" >Login</button>

      <label>
        <input
          type="checkbox"
          
        />
        Remember me
      </label>
    </div>

    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
      <button type="button" className="cancelbtn">
        Cancel
      </button>
      <span className="psw">
        Forgot <a href="#">password?</a>
      </span>
    </div>
   </form>
   
 



  )
}

export default Login