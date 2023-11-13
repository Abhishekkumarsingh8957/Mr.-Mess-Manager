import React, { useEffect } from 'react'
import { useState } from 'react';
import '..//../design/hosteldesign/Emessmenu.css'
import { RiLogoutCircleFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillHome } from 'react-icons/ai';
import {BiSolidUpvote,BiSolidDownvote} from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export default function Emessmenu() {
    const navigate=useNavigate();
    const days = ['mon'];

    const [editing, setEditing] = useState(false);
    const [data, setData] = useState({
        mon: {
            breakfast: 'Omelette',
            lunch: 'Chicken Curry',
            snacks: 'Chips',
            dinner: 'Vegetable Biryani',
        },
    });

    const editRows = () => {
        setEditing(true);
    };

    const saveChanges = () => {
        setEditing(false);

        // Save the data (optional)
        days.forEach(day => {
            saveData(day);
        });
    };

    const saveData = day => {
        localStorage.setItem(day, JSON.stringify(data[day]));
    };

    const loadData = day => {
        const storedData = localStorage.getItem(day);
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData(prevData => ({ ...prevData, [day]: parsedData }));
        }
    };

   useEffect(()=>{
    days.forEach(day => {
        loadData(day);
    });
   },[]);
   

   

    const renderRows = () => {
        const cells = ['breakfast', 'lunch', 'snacks', 'dinner'];
        return days.map(day => (
            <tr key={day}>
                <td>{day}</td>
                {cells.map(cell => (
                    <td key={cell}>
                        {editing ? (
                            <input
                                type="text"
                                value={data[day][cell]}
                                onChange={e => handleInputChange(day, cell, e.target.value)}
                            />
                        ) : (
                            data[day][cell]
                        )}
                    </td>
                ))}
                <td>
                    {editing ? (
                        <button className="save-btn" onClick={() => saveChanges()}>
                            Save Changes
                        </button>
                    ) : (
                        <button className="edit-btn" onClick={() => editRows()}>
                            Edit
                        </button>
                    )}
                </td>
            </tr>
        ));
    };

    const handleInputChange = (day, cell, value) => {
        setData(prevData => ({
            ...prevData,
            [day]: {
                ...prevData[day],
                [cell]: value,
            },
        }));
    };
  return (
    <div>
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
          <li onClick={()=>{navigate('/');
            console.log("gobck")} }>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>
    <h2>Messmenu</h2>
    <table>
        <thead>
            <tr>
                <th>Day</th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Snacks</th>
                <th>Dinner</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
    </table>
</div>
  )
}
