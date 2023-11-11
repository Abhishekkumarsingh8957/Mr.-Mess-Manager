import React from 'react'

export default function LoginAccnt() {
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
       
      /><label htmlFor="uname"><b>Name</b></label>
      <input
        type="text"
        placeholder="Enter Username"
       
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


      <button type="submit">Login</button>

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
