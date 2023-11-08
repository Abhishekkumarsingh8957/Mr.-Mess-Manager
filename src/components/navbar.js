import React, { useState } from 'react';
import { useEffect } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import About from './About';
import '../design/navbar.css';

const Navbar = () => {
  const description = [
    { Person: "Student", Feat1: "some feature" },
    { Person: "ChiefWarden", Feat1: "some feature" },
    { Person: "Accountant", Feat1: "some feature" }
  ];

  const [show, setShow] = useState(Array(3).fill(false));
  

  const showDesc = (index) => {
    const newShowState = [...show];
    newShowState[index] = !newShowState[index];
    setShow(newShowState);
  }

 

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='title'>MR.MessManager</div>
        <ul className='list-items'>
          <li><u>Home</u></li>
          <li ><u>About</u></li>
          <li>
            <u>Login as</u>
            <ul className='sub-list'>
              <li type='none'>Student</li>
              <li type='none'>Chiefwarden</li>
              <li type='none'>Accountants</li>
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
                <li type='none'>
              <li className='parent-list' key={index} type='none' onClick={() => showDesc(index)}>
                {descript.Person}
                </li>
                 {show[index]&&<div className='description-box'><li type='none' key={index}>&nbsp;{descript.Feat1}</li></div>}
                </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
