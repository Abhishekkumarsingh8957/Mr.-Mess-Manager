import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { FaDatabase } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../../design/hosteldesign/Emessmenu.css';

export default function Emessmenu() {
  const [messMenu, setMessMenu] = useState([]);
  const [edit, setEdit] = useState(Array(messMenu.length).fill(false));
  const navigate = useNavigate();
  const handleToggleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/messmenu", { params: { hostelname: "Tilak" } });
        setMessMenu(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const Mess = Object.values(messMenu).map(({ hostelname, menu }) => {
    const days = Object.keys(menu);

    return days.map((day) => ({
      Day: day,
      BreakFast: menu[day][0],
      Lunch: menu[day][1],
      Snacks: menu[day][2],
      Dinner: menu[day][3],
    }));
  }).flat();


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
          <li>
            <u >StudentData</u>
            <FaDatabase />
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
              <td>{!edit[index] ? val.BreakFast : <input value={val.BreakFast} />}</td>
              <td>{!edit[index] ? val.Lunch : <input value={val.Lunch} />}</td>
              <td>{!edit[index] ? val.Snacks : <input value={val.Snacks} />}</td>
              <td>{!edit[index] ? val.Dinner : <input value={val.Dinner} />}</td>
              <td>
                {!edit[index] ? (
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

