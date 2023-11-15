import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginCW() {
  const navigate=useNavigate();
  const check=()=>{
    navigate('/chiefwarden');
  }
  return (
    <form >
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" className="avatar" />
    </div>
    <div className="form-container">
      <label htmlFor="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
       
      />
      <label htmlFor="name"><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter Name"
       
      />
       
       <label htmlFor="psw"><b>ContactNumber</b></label>
      <input
        type="text"
        placeholder="Enter PhoneNumber"
        
      />
      <label htmlFor="uname"><b>Hostel</b></label>
      <input
        type="text"
        placeholder="Enter Hostelname"
       
      />

      <label htmlFor="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        
      />


      <button type="submit" onClick={check}>Login</button>

      <label>
        <input
          type="checkbox"
          
        />
        Remember me
      </label>
    </div>

    <div className="form-container" style={{ backgroundColor: '#f1f1f1' }}>
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
