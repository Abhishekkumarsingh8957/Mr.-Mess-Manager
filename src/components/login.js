import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../design/login.css";
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hostel, setHostel] = useState(""); // Added hostel state
  const [name, setName] = useState(""); // Added name state

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password, hostel, name);

    try {
      const res = await axios.post('http://localhost:8080/loginstudent', {
        username,
        password,
        hostel, 
        name, 
      });
      if (res.data.message === "Login successful") {
        navigate("/student", { state: { userData: res.data.user } });
        console.log(res.data.user)
        console.log('successful');
      } else {
        // Handle unsuccessful login
        console.error(res.data.message);
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error(error);
      // Handle other errors (e.g., network issues)
      // You might want to show an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className="form-container">
        <label htmlFor="uname"><b>Username</b></label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="psw"><b>Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="hostel"><b>Hostel</b></label>
        <input
          type="text"
          placeholder="Enter Hostel"
          value={hostel}
          onChange={(e) => setHostel(e.target.value)}
          required
        />

        <label htmlFor="name"><b>Name</b></label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <button type="submit">LOGIN</button>

        <label>
          <input
            type="checkbox"
            value={username}
          />
          Remember me
        </label>
      </div>

      <div className="form-container" style={{ backgroundColor: '#f1f1f1' }}>
        <button type="button" className="cancelbtn">
          Cancel
        </button>
        <span className="psw">
          <a href="#">Forgot password?</a>
        </span>
      </div>
    </form>
  );
}

export default Login;
