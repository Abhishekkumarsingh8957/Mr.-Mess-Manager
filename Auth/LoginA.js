import React from 'react'
import Layout from '../../components/Layout/Layout'
import "../../styles/AuthStyles.css";


const LoginA = () => {
  return (


<Layout title="Register - Ecommer App">
<div className="form-container ">
  <form >
    <h4 className="title">ACCOUNTANT</h4>
    
    {/* <div className="mb-3">
      <input
        type="text"
        
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter Your Name"
        required
        autoFocus
      />
    </div>
      */}
    {/* <div className="mb-3">
      <input
        type="text"
        
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter Your Reg.No."
        required
        autoFocus
      />
    </div> */}
{/* 
    <div className="mb-3">
      <input
        type="email"
       
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter Your Email "
        required
      />
    </div> */}

    <div className="mb-3">
      <input
        type="text"
        
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter Your Hostel"
        required
        autoFocus
      />
    </div>
    {/* <div className="mb-3">
      <input
        type="text"
        
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter Your Mob.No."
        required
        autoFocus
      />
    </div> */}
    <div className="mb-3">
      <input
        type="password"
      
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Enter Your Password"
        required
      />
    </div>
   
    
    
    <button type="submit" className="btn btn-primary">
      LOG IN
    </button>
  </form>
</div>
</Layout> 








  )
}

export default LoginA