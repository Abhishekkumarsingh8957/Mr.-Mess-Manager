import React, { useEffect, useState } from 'react';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import '../../design/hosteldesign/Emessmenu.css';

export default function Emessmenu() {
  const Mess = [
    {
      Day: "Sunday",
      BreakFast: ["item1", "item2", "item3"],
      Lunch: ["item3", "item4", "item4"],
      Snacks: ["item5", "item6", "item7"],
      Dinner: ["item7", "item8", "item9"],
      
    },
    {
        Day: "Monday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        
      },
      {
        Day: "Tuesday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        
      },
      {
        Day: "Wednesday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        
      },
      {
        Day: "Thursday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        
      },
      {
        Day: "Friday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],
        
      },
      {
        Day: "Saturday",
        BreakFast: ["item10", "item11", "item12"],
        Lunch: ["item13", "item14", "item15"],
        Snacks: ["item16", "item17", "item18"],
        Dinner: ["item19", "item20", "item21"],

      },
  ];

  const [edit, setEdit] = useState(Array(Mess.length).fill(true));
  const [save, setSave] = useState(false);
  const navigate = useNavigate();

  
  const handleToggleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className='body-student'>
      <div className='navbar'>
        <div className='title'>Hostel</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li>
            <u>About</u>
            <FcAbout color='black' size={25} />
          </li>
          <li onClick={() => { navigate('/'); console.log("gobck"); }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
        <h3 className='mess-menu-title'> Hostel MessMenu </h3>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Mess.map((val, index) => (
            <tr key={index}>
              <td>{val.Day}</td>
              <td>{edit[index] ? val.BreakFast.join(', ') : <input />}</td>
              <td>{edit[index] ? val.Lunch.join(', ') : <input />}</td>
              <td>{edit[index] ? val.Snacks.join(', ') : <input />}</td>
              <td>{edit[index] ? val.Dinner.join(', ') : <input />}</td>
              <td>
                {edit[index] ? (
                  <button className='edit-btn' onClick={() => handleToggleEdit(index)}>
                    Edit
                  </button>
                ) : (
                  <button className='save-btn' onClick={() => handleToggleEdit(index)}>
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

