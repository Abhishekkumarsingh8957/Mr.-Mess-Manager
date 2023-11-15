import React, { useState } from 'react';
import '../../design/homepagedesign/Student.css';
import Marquee from 'react-fast-marquee';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
export default function Chiefwarden() {
  
    const student = { name: "User", reg: 20215153 };
    const [show, setShow] = useState(true);
   const navigate=useNavigate();
    const showHandler = () => {
      setShow(!show);
    };
  
    return (
      <div className='body-student'>
        <div className='navbar'>
          <div className='title'>MR.MessManager</div>
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
              <u >Logout</u>
              <RiLogoutCircleFill size={25} />
            </li>
          </ul>
        </div>
        <div className='profile' onClick={showHandler}>
          <RxHamburgerMenu size={26} color='violet' />
        </div>
        <Sidebar collapsed={!show} width='400px'>
          <Menu>
            
          </Menu>
        </Sidebar>
       <Link to={'/hostelCA'}> <div className='hostelBox1'>Hostel A</div></Link>
       <Link to={'/hostelCA'}><div className='hostelBox2'>Hostel B</div></Link>
       <Link to={'/hostelCA'}><div className='hostelBox3'>Hostel C</div></Link>
       <Link to={'/hostelCA'}><div className='hostelBox4'>Hostel D</div></Link>
        <Marquee direction='reverse'>
          <div className='marquee-content'>
            Select Hostel {student.name}
          </div>
        </Marquee>
      </div>
  )
}
