import React, { useEffect, useState } from 'react';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { AiFillHome,AiFillCheckSquare } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import {FcAbout} from 'react-icons/fc'
import '../../design/calorie.css';
import Marquee from 'react-fast-marquee';
import axios from 'axios';

export default function Calorie() {
  const location = useLocation();
  const hostelName = location.state?.hostel;


 const [totsum, setTotsum] = useState(0)
 const [showsum,setshowsum]=useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);  const [sum3, setSum3] = useState(0);
  const [sum4, setSum4] = useState(0);
  const [sum5, setSum5] = useState(0);  const [sum6, setSum6] = useState(0); const [sum7, setSum7] = useState(0);
  const [sum8, setSum8] = useState(0);  const [sum9, setSum9] = useState(0); const [sum10, setSum10] = useState(0);
  const [sum11, setSum11] = useState(0);  const [sum12, setSum12] = useState(0);
  const navigate = useNavigate();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
  const [messMenu, setMessMenu] = useState({});
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/messmenu",{ params: { hostelname: hostelName } });
        setMessMenu(response.data);
        console.log(response.data[0].menu.sunday[0][0])
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenuData();
  }, []);

  console.log(messMenu)


  const mapday = new Map([
    ["Sunday", [["Paratha", "Chana Chutney", "Aloo Sabzi"], ["Rajma Rice", "Palak Paneer", "Roti"], ["Bhujia", "Pakode", "Tea"], ["Dal Makhani", "Shahi Paneer", "Naan"]]],
    ["Monday", [["Poha", "Upma", "Tea"], ["Chicken Biryani", "Bhindi Masala", "Roti"], ["Samosa", "Fruit", "Buttermilk"], ["Mixed Dal", "Aloo Gobi", "Paratha"]]],
    ["Tuesday", [["Dahi Churamuri", "Puri Aloo", "Snack"], ["Matar Paneer", "Bites Roti", "Dahi"], ["Kachori", "Fruit", "Pomegranate"], ["Sarson Ka Saag", "Makki Ki Roti", "Jaggery"]]],
    ["Wednesday", [["Sooji Halwa", "Puri", "Lassi"], ["Dal Khichdi", "Baingan Bharta", "Tea"], ["Papdi Chaat", "Roasted Peanuts", "Carrot Halwa"], ["Mirchi Ka Saag", "Chapati", "Kheer"]]],
    ["Thursday", [["Aloo Paratha", "Coriander Chutney", "Milk"], ["Kadhai Chicken", "Butter Naan", "Rajma"], ["Fruit", "Chole Bhature", "Tea"], ["Baingan Ka Bharta", "Dal Tadka", "Roti"]]],
    ["Friday", [["Udad Dal Ki Khichdi", "Chutney", "Tea"], ["Mixed Vegetable Pulao", "Baingan Masala", "Roti"], ["Aloo Tikki", "Sev Puri", "Thandai"], ["Palak Paneer", "Dal Makhani", "Naan"]]],
    ["Saturday", [["Paneer Sandwich", "Fruit", "Shake"], ["Rajma Rice", "Aloo Gobi", "Roti"], ["Batata Vada", "Tea", "Gulab Jamun"], ["Kadai Paneer", "Jeera Rice", "gazar Halwa"]]],
  ]);

  const day = new Date().getDay();
  const query = [
    [mapday.get(days[day])[0][0], mapday.get(days[day])[0][1], mapday.get(days[day])[0][2]],
    [mapday.get(days[day])[1][0], mapday.get(days[day])[1][1], mapday.get(days[day])[1][2]],
    [mapday.get(days[day])[2][0], mapday.get(days[day])[2][1], mapday.get(days[day])[2][2]],
    [mapday.get(days[day])[3][0], mapday.get(days[day])[3][1], mapday.get(days[day])[3][2]],
  ];
  
 
  var calories = Array.from({ length: 4 }, () => Array(3).fill(0));
  
  useEffect(() => {
    const fetchData = async () => {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          let q = query[i][j];
          try {
            const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${q}`, {
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
            calories[i][j] = result.items[0].calories;
          } catch (error) {
            console.error('Error:', error.message);
          }
        }
      }
  
      
      const newTotsum =
        sum1 * calories[0][0] +
        sum2 * calories[0][1] +
        sum3 * calories[0][2] +
        sum4 * calories[1][0] +
        sum5 * calories[1][1] +
        sum6 * calories[1][2] +
        sum7 * calories[2][0] +
        sum8 * calories[2][1] +
        sum9 * calories[2][2] +
        sum10 * calories[3][0] +
        sum11 * calories[3][1] +
        sum12 * calories[3][2];
  
      
      setTotsum(newTotsum);
    };
  
    fetchData();
  }, [sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9, sum10, sum11, sum12]); 
  
  ;
  const showcalculate=()=>{
      setshowsum(totsum);
  }
 
    
    



  
  

   
   
  
  

  
  const Calculate = (setter, str) => {
    switch (str) {
      case "+":
        setter((prevSum) =>{
         return prevSum=prevSum+0.5;     
        });
        break;
      case "-":
        if (setter>= 0.5) {
          setter((prevSum) => {return prevSum=prevSum-0.5});
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
        <div className='title'>{hostelName}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
     
          <li>
            <u onClick={()=>{navigate('/checkcalorie',{state:{hostel:hostelName}})}}>CheckCalorie</u>
            <FcAbout color='black' size={25} />
          </li>
          <li>
           <u onClick={()=>{navigate('/resolvecomment',{state:{hostel:hostelName}})}}>Resolved-box</u>
           <AiFillCheckSquare size={25} color='blue'/>
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
        
          <li  type='none'>
            {mapday.get(days[day])[0][0]}
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

          <li  type='none'>
            {mapday.get(days[day])[0][1]}
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
          <li  type='none'>
            {mapday.get(days[day])[0][2]}
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

       <h4>Lunch</h4>
      <ul>
        
          <li  type='none'>
            {mapday.get(days[day])[1][0]}
            <div className='btn-container'>
              <button className='add-sub' onClick={() => Calculate(setSum4, "-")}>
                -
              </button>
              <span>{sum4}</span>
              <button className='add-sub' onClick={() => Calculate(setSum4, "+")}>
                +
              </button>
            </div>
          </li>
              <li  type='none'>
              {mapday.get(days[day])[1][1]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum5, "-")}>
                  -
                </button>
                <span>{sum5}</span>
                <button className='add-sub' onClick={() => Calculate(setSum5, "+")}>
                  +
                </button>
              </div>
            </li>
            <li  type='none'>
              {mapday.get(days[day])[1][2]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum6, "-")}>
                  -
                </button>
                <span>{sum6}</span>
                <button className='add-sub' onClick={() => Calculate(setSum6, "+")}>
                  +
                </button>
              </div>
            </li>


        
      </ul>

      <h4>Snacks</h4>
      <ul>
      <li  type='none'>
              {mapday.get(days[day])[2][0]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum7, "-")}>
                  -
                </button>
                <span>{sum7}</span>
                <button className='add-sub' onClick={() => Calculate(setSum7, "+")}>
                  +
                </button>
              </div>
            </li>
            <li type='none'>
            {mapday.get(days[day])[2][1]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum8, "-")}>
                  -
                </button>
                <span>{sum8}</span>
                <button className='add-sub' onClick={() => Calculate(setSum8, "+")}>
                  +
                </button>
              </div>
            </li>
            <li type='none'>
            {mapday.get(days[day])[2][2]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum9, "-")}>
                  -
                </button>
                <span>{sum9}</span>
                <button className='add-sub' onClick={() => Calculate(setSum9, "+")}>
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
                <button className='add-sub' onClick={() => Calculate(setSum10, "-")}>
                  -
                </button>
                <span>{sum10}</span>
                <button className='add-sub' onClick={() => Calculate(setSum10, "+")}>
                  +
                </button>
              </div>
            </li>
            <li type='none'>
            {mapday.get(days[day])[3][1]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum11, "-")}>
                  -
                </button>
                <span>{sum11}</span>
                <button className='add-sub' onClick={() => Calculate(setSum11, "+")}>
                  +
                </button>
              </div>
            </li>
            <li type='none'>
            {mapday.get(days[day])[3][2]}
              <div className='btn-container'>
                <button className='add-sub' onClick={() => Calculate(setSum12, "-")}>
                  -
                </button>
                <span>{sum12}</span>
                <button className='add-sub' onClick={() => Calculate(setSum12, "+")}>
                  +
                </button>
              </div>
            </li>
      </ul> 
      <button className='calculate' onClick={showcalculate}>calculate</button>
      </div>
      <div className='note'>
        <Marquee direction='reverse'>
          <b>Note:</b>calorie calculation will take some time u need to press calculate button twice
          </Marquee> 
          </div>
      <div className='result'>Your calculated calorie for today is <h3>{showsum}</h3></div>
    </div>
  );
}
