import React from 'react'
import '..//../design/hosteldesign/hostel.css'
import Messmenu from './messmenu'
import Popup from 'reactjs-popup';
import Profile from '../profile'
import 'reactjs-popup/dist/index.css';
import  { useState } from 'react';
import '../../design/homepagedesign/Student.css';
import Member from './memeber';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import {BiSolidUpvote,BiSolidDownvote} from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
export default function HostelA() {
   const student = { name: "User", reg: 20215153 ,hostel:"Hostelname"};
   const comments=[{comment:"comment1",time:"5:10am",sendername:"sender 1"},{comment:"comment2",time:Number,sendername:"sender 2"},{comment:"comment3",time:Number,sendername:"sender 3"}];
  const [show, setShow] = useState(false);
   
  const navigate=useNavigate();
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
            <u>About</u>
            <FcAbout color='black' size={25} />
          </li>
          <li onClick={()=>{navigate('/');
            console.log("gobck")} }>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
      <div className='profile' onClick={showHandler}>
        <RxHamburgerMenu size={26} color='violet' />
      </div>
      
      <Popup trigger={<h3><u >Mess-menu</u></h3>} modal nested contentStyle={popUpstyle}>
            <Messmenu/>
        </Popup>
        {show?<Profile/>:<Member/>}
        <div className='complaint-box'>
            {
                comments.map((comment,index)=>(
                    <div>
                    <div className='comment-section' key={index}><div className='comment-sender'> {comment.sendername} {comment.time}</div>
                    <span className='vote-btn'><BiSolidUpvote size={18} className='up-btn' color='green'/>&nbsp;<BiSolidDownvote size={18} className='down-btn' color='red'/></span>
                    </div>
                    
                    </div>
                       
                ))
            }
             <input  className='complaint-typer' placeholder='Type complaint or any feedback and press Enter'/>
        </div>
       

        
    </div>
         
    
  )
}
const popUpstyle={
    width: '60%',
    height: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    background: '#fff',
};
