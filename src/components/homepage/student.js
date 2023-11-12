import React, { useState } from 'react';
import '../../design/homepagedesign/Student.css';
import Marquee from 'react-fast-marquee';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { Sidebar, Menu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Link, useNavigate } from 'react-router-dom';
import HostelA from '../hostels/hostelA';

export default function Student() {
  const student = { name: "User", reg: 20215153 };
  const [show, setShow] = useState(true);
 const navigate=useNavigate();
  const showHandler = () => {
    setShow(!show);
  };

  return (
    // <div className='body-student'>
    //   <div className='navbar'>
    //     <div className='title'>MR.MessManager</div>
    //     <ul className='list-items'>
    //       <li>
    //         <u>Home</u>
    //         <AiFillHome size={25} />
    //       </li>
    //       <li>
    //         <u>About</u>
    //         <FcAbout color='black' size={25} />
    //       </li>
    //       <li onClick={()=>{navigate('/');
    //         console.log("gobck")} }>
    //         <u >Logout</u>
    //         <RiLogoutCircleFill size={25} />
    //       </li>
    //     </ul>
    //   </div>
    //   <div className='profile' onClick={showHandler}>
    //     <RxHamburgerMenu size={26} color='violet' />
    //   </div>
    //   <Sidebar collapsed={!show} width='400px'>
    //     <Menu>
          
    //     </Menu>
    //   </Sidebar>
    
    // </div>

    <HostelA/>
  );
}
