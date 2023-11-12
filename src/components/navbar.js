import React, { useState } from 'react';
import '../design/navbar.css'; 
import Login from './login';
import LoginCW from './loginCW';
import LoginAccnt from './loginAccnt';
import {LiaSignInAltSolid} from 'react-icons/lia'
import {AiFillHome} from 'react-icons/ai'
import {FcAbout}from 'react-icons/fc'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const description = [
    { Person: "Student", Feat1: "some feature" },
    { Person: "ChiefWarden", Feat1: "some feature" },
    { Person: "Accountant", Feat1: "some feature" }
  ];
    const Navigate=useNavigate();
  const [show, setShow] = useState(Array(description.length).fill(false));

  const showDesc = (index) => {
    const newShowState = [...show];
    newShowState[index] = !newShowState[index];
    setShow(newShowState);
  };

  const studentPopup = (
    <Popup
      trigger={<li type='none'>Student</li>}
      modal
      nested
      position="center center"
      contentStyle={popupStyle}
    >
      <Login />
    </Popup>
  );

  const chiefWardenPopup = (
    <Popup
      trigger={<li type='none'>ChiefWarden</li>}
      modal
      nested
      position="center center"
      contentStyle={popupStyle}
    >
      <LoginCW />
    </Popup>
  );

  const accountantPopup = (
    <Popup
      trigger={<li type='none'>Accountants</li>}
      modal
      nested
      position="center center"
      contentStyle={popupStyle}
    >
      <LoginAccnt />
    </Popup>
  );

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='title'>MR.MessManager</div>
        <ul className='list-items'>
        <li><u>Home<AiFillHome size={25}/></u></li>
          <li><u>About<FcAbout color='black' size={25}/></u></li>
          <li>
            <u>Login as<LiaSignInAltSolid size={25}/></u>
            <ul className='sub-list'>
              {studentPopup}
              {chiefWardenPopup}
              {accountantPopup}
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
  );
};

const popupStyle = {
  width: '60%',
  height: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  background: '#fff',
};

export default Navbar;
