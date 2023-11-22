import React, { useState } from 'react';
import '../../design/homepagedesign/Student.css';
import Marquee from 'react-fast-marquee';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export default function Chiefwarden() {
  
    const location=useLocation();
    const userData = location.state?.userData;

    
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
        <div
        className={`hostelBox1 ${
          userData.hostel !== 'Tilak' ? 'disabled1' : ''
        }`}
        onClick={() => userData.hostel === 'Tilak' && navigate('/hostelCA', { state: { userData: userData } })}
      >
        Tilak
      </div>
      <div
        className={`hostelBox2 ${
          userData.hostel !== 'SVBH' ? 'disabled2' : ''
        }`}
        onClick={() => userData.hostel==='SVBH'&&navigate('/hostelCA', { state: { userData: userData } })}
      >
        SVBH
        
      </div>
      <div
        className={`hostelBox3 ${
          userData.hostel !== 'Tagore' ? 'disabled3' : ''
        }`}
        onClick={() => userData.hostel==='Tagore'&&navigate('/hostelCA', { state: { userData: userData } })}
      >
        Tagore
      </div>
      <div
        className={`hostelBox4 ${
          userData.hostel !== 'Tondon' ? 'disabled4' : ''
        }`}
        onClick={() => userData.hostel==='Tondon'&&navigate('/hostelCA', { state: { userData: userData } })}
      >
        Tondon
      </div>
        <Marquee direction='reverse'>
          <div className='marquee-content'>
            Select Hostel {userData.name}
          </div>
        </Marquee>
      </div>
  )
}
