// Import statements
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { LiaSignInAltSolid } from 'react-icons/lia';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';

import '../design/navbar.css';
import '../design/About.css';
import Login from './login';
import About from './About';
import LoginCW from './loginCW';
import LoginAccnt from './loginAccnt';
import Registera from './registera';
import Registerw from './registerw';
import Register from './register';

// Component
const Navbar = () => {
  // State
  const description = [
    { Person: "Student", Feat1: "some feature" },
    { Person: "ChiefWarden", Feat1: "some feature" },
    { Person: "Accountant", Feat1: "some feature" }
  ];
  const [hideabout, setAbout] = useState(() => false);
  const [show, setShow] = useState(Array(description.length).fill(false));

  // Router navigation
  const Navigate = useNavigate();

  // Data
 

  // Handlers
  const showDesc = (index) => {
    const newShowState = [...show];
    newShowState[index] = !newShowState[index];
    setShow(newShowState);
  };

  // Popups
  const studentPopup = (
    <Popup trigger={<li type='none'>Student</li>} modal nested position="center center" contentStyle={popupStyle}>
      <Login />
    </Popup>
  );

  const chiefWardenPopup = (
    <Popup trigger={<li type='none'>ChiefWarden</li>} modal nested position="center center" contentStyle={popupStyle}>
      <LoginCW />
    </Popup>
  );

  const accountantPopup = (
    <Popup trigger={<li type='none'>Accountants</li>} modal nested position="center center" contentStyle={popupStyle}>
      <LoginAccnt />
    </Popup>
  );
  const RegstudentPopup = (
    <Popup trigger={<li type='none'>Student</li>} modal nested position="center center" contentStyle={popupStyle}>
      <Register />
    </Popup>
  );

  const RegchiefWardenPopup = (
    <Popup trigger={<li type='none'>chiefWarden</li>} modal nested position="center center" contentStyle={popupStyle}>
      <Registerw />
    </Popup>
  );
  const RegaccountantPopup = (
    <Popup trigger={<li type='none'>Accountants</li>} modal nested position="center center" contentStyle={popupStyle}>
      <Registera />
    </Popup>
  );

  // Render
  return (
    <>
      {hideabout ? (
        <div className="about-section">
          <span className='about'>About us</span>
          <button className='x-btn' onClick={() => { setAbout(prevState => !prevState); console.log(hideabout) }}>X</button>
         
      <p>
        Welcome to our Mess Management System! Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. ...
      </p>
      <p>
        If you have any questions or feedback, feel free to contact us at
        <a href="mailto:info@example.com">ourCollege@.ac.in</a>.
      </p>
      <div className="contact-section">
        <h3>Contact Us</h3>
        <p>
          For inquiries, please reach out to us using the contact number  or via
          email provided below.
        </p>
        <div className="contact-person">
          <h4>Chief Warden</h4>
          <p>Contact Number: +1234567890</p>
          <p>Email: chiefwarden@example.com</p>
        </div>

        {/* Accountant Contact */}
        <div className="contact-person">
          <h4>Accountant</h4>
          <p>Contact Number: +9876543210</p>
          <p>Email: accountant@example.com</p>
        </div>
      </div>
        </div>
      ) : (
        <div className='container'>
          <div className='navbar'>
            <div className='title'>MR.MessManager</div>
            <ul className='list-items'>
              <li>
                <u>Home<AiFillHome size={25} /></u>
              </li>
              <li>
                <u onClick={() => { setAbout(prevState => !prevState); console.log(hideabout) }}>About<FcAbout color='black' size={25} /></u>
              </li>
              <li>
                <u>Login as<LiaSignInAltSolid size={25} /></u>
                <ul className='sub-list'>
                  {studentPopup}
                  {chiefWardenPopup}
                  {accountantPopup}
                </ul>
              </li>
              <li>
                <u>Register as<LiaSignInAltSolid size={25} /></u>
                <ul className='sub-list'>
                  {RegstudentPopup}
                  {RegchiefWardenPopup}
                  {RegaccountantPopup}
                </ul>
              </li>
            </ul>
          </div>

          <div className='image'>
            <br />
            <div className='feature-box'>
              <h2>Features</h2>
              <ul>
                {description.map((descript, index) => (
                  <li type='none' key={index}>
                    <li className='parent-list' onClick={() => showDesc(index)}>
                      {descript.Person}
                    </li>
                    {show[index] && (
                      <div className='description-box'>
                        <li type='none'>&nbsp;{descript.Feat1}</li>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Popup Style
const popupStyle = {
  width: '60%',
  height: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  background: '#fff',
};

// Export component
export default Navbar;
