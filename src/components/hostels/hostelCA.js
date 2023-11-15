import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUpvote, BiSolidDownvote } from 'react-icons/bi';
import { FcAbout } from 'react-icons/fc';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { FaEdit } from "react-icons/fa";
import { RxHamburgerMenu } from 'react-icons/rx';
import '../../design/homepagedesign/Student.css';
import '../../design/hosteldesign/hostel.css';
import Member from './memeber';
import Messmenu from './messmenu';
import Profile from '../profile';




export default function HostelCA() {
    const student = { name: "User", reg: 20215153, hostel: "Hostelname" };
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const comments = [
      { comment: "Koi to veg biryani hatao pls", time: "5:10am", sendername: "sender 1" },
      { comment: "Haa yaar usko jagah daal chawal rakhdo", time: Number, sendername: "sender 2" },
      
    ];
  
    const [comment, setComment] = useState({
      comment: "",
      time: null,
      sendername: student.name,
    });
  
    const handleComment = (e) => {
      setComment({
        ...comment,
        comment: e.target.value,
      });
    };
    
  const handleSend = () => {
    comment.time = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  }
    const showHandler = () => {
        setShow(!show);
      };
  return (
    <div className='body-student'>
      <div className='navbar'>
        <div className='title'>{student.hostel}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li>
            <Link to={'/Emessmenu'}><u>EditMessMenu</u></Link>
            <FaEdit size={22}/>
          </li>
          <li onClick={() => { navigate('/'); console.log("gobck"); }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
      <div className='profile' onClick={showHandler}>
        <RxHamburgerMenu size={26} color='violet' />
      </div>
     
      <Popup trigger={<h3><u>Mess-menu</u></h3>} modal nested contentStyle={popUpstyle}>
        <Messmenu />
      </Popup>
      {show ? <Profile /> : <Member />}
      <div className='complaint-box'>
        {comments.map((comment, index) => (
          <div key={index}>
            <div className='comment-section'>
              <div className='comment-sender'> {comment.sendername} {comment.time}</div>
              {comment.comment}
              <span className='vote-btn'>
                <BiSolidUpvote size={18} className='up-btn' color='green' />&nbsp;
                <BiSolidDownvote size={18} className='down-btn' color='red' />
              </span>
            </div>
          </div>
        ))}
       
      </div>
      <input
          className='complaint-typer'
          placeholder='Type complaint or any feedback and press Enter'
          onChange={handleComment}
          value={comment.comment}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend(e.key);
              e.target.value = " ";
            }
          }}
        />
        
    </div>
  );
}

const popUpstyle = {
  width: '60%',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  background: '#fff',
  overflowY: 'auto', // Add this line to make the content scrollable
};

