import React, { useEffect, useState } from 'react';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import '../../design/calorie.css';

export default function Calorie() {
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);
  const [sum3, setSum3] = useState(0);

  const navigate = useNavigate();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const BreakFast = ["item1"];
  const Lunch = ["item2"];
  const Snacks = ["item3"];
  const Dinner = ["item4"];
  const mapday = new Map([
    ["Sunday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Monday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Tuesday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Wednesday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Thursday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Friday", [BreakFast, Lunch, Snacks, Dinner]],
    ["Saturday", [BreakFast, Lunch, Snacks, Dinner]],
  ]);

  const day = new Date().getDay();

  useEffect(() => {
    const query = "daal makani";
    console.log(query);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'a6dUtwKLQPEft5PGQqUTiw==KiDGFlNhGs7BzsLX',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.items[0].calories * sum);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [sum]);

  const Calculate = (setter, str) => {
    switch (str) {
      case "+":
        setter((prevSum) => prevSum + 0.5);
        break;
      case "-":
        if (setter >= 0.5) {
          setter((prevSum) => prevSum - 0.5);
        } else {
          setter(0);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='calorie-body'>
      <div className='navbar'>
        <div className='title'>Hostel</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li onClick={() => { navigate('/'); console.log('goback'); }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
          <li>
            <u className='profile-link'>Profile</u>
          </li>          
        </ul>
      </div>

      <h3 className='mess-menu-title'> CalorieMeter </h3>

      <div className='calorie-box'>
        <h4>Breakfast</h4>
        <ul>
          <li type='none'>
            {mapday.get(days[day])[0][0]}
            <div className='btn-container'>
              <button className='add-sub' onClick={() => Calculate(setSum, "-")}>
                -
              </button>
              <span>{sum}</span>
              <button className='add-sub' onClick={() => Calculate(setSum, "+")}>
                +
              </button>
            </div>
          </li>
        </ul>

        <h4>Lunch</h4>
        <ul>
          <li type='none'>
            {mapday.get(days[day])[1][0]}
            <div className='btn-container'>
              <button className='add-sub' onClick={() => Calculate(setSum1, "-")}>
                -
              </button>
              <span>{sum1}</span>
              <button className='add-sub' onClick={() => Calculate(setSum1, "+")}>
                +
              </button>
            </div>
          </li>
        </ul>

        <h4>Snacks</h4>
        <ul>
          <li type='none'>
            {mapday.get(days[day])[2][0]}
            <div className='btn-container'>
              <button className='add-sub' onClick={() => Calculate(setSum2, "-")}>
                -
              </button>
              <span>{sum2}</span>
              <button className='add-sub' onClick={() => Calculate(setSum2, "+")}>
                +
              </button>
            </div>
          </li>
        </ul>

        <h4>Dinner</h4>
        <ul>
          <li type='none'>
            {mapday.get(days[day])[3][0]}
            <div className='btn-container'>
              <button className='add-sub' onClick={() => Calculate(setSum3, "-")}>
                -
              </button>
              <span>{sum3}</span>
              <button className='add-sub' onClick={() => Calculate(setSum3, "+")}>
                +
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div className='result'>Your calculated calorie for today is {sum}</div>
    </div>
  );
}
