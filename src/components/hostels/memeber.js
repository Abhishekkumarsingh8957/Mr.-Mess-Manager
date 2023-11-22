import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { AiFillCheckSquare } from "react-icons/ai";

import { FcAbout } from 'react-icons/fc';
import { RiLogoutCircleFill } from 'react-icons/ri';

import '../../design/homepagedesign/Student.css';
import '../../design/hosteldesign/hostel.css';
import '../../design/hosteldesign/member.css'

import Profile from '../profile';

import { Link } from 'react-router-dom';

export default function Member() {
  const navigate=useNavigate();
  const [resComment, setresComment] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:8080/resolvecomment")
      .then((res) => {
        setresComment(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='body-student'>
    <div className='navbar'>
    <div className='title'>Mr.MessManager</div>
    <ul className='list-items'>
      <li>
        <u>Home</u>
        <AiFillHome size={25} />
      </li>
      <li>
        <Link to='/checkcalorie'><u>CheckCalorie</u></Link>
        <FcAbout color='black' size={25} />
      </li>
      <li>
       <u onClick={()=>{navigate('/resolvecomment')}}>Resolved-box</u>
       <AiFillCheckSquare size={25} />
      </li>
      <li onClick={() => { navigate('/');  }}>
        <u>Logout</u>
        <RiLogoutCircleFill size={25} />
      </li>
      <li>
        <u className='profile-link'>Profile</u>
         
    
      </li>
    </ul>
  </div>
    

    <div className='resolved-box'>
    <h2>Resolved Comments:</h2>
    {resComment.length > 0 ? (
      <div className="message-container">
        {resComment.map((comment) => (
          <div key={comment._id} className="message-bubble">
            <strong>{comment.hostel}</strong>
            <p>{comment.comment}</p>
           
          </div>
        ))}
      </div>
    ) : (
      <p>No resolved comments available.</p>
    )}
  </div>
  </div>

);

    }