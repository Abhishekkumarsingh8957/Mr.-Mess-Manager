import React, { useEffect ,useState} from 'react';
import '..//../design//hosteldesign/messmenu.css'
import axios from 'axios';
export default function Messmenu({props}) {
   console.log(props.hostelname)
  const [messMenu, setMessMenu] = useState([]);
  
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/messmenu",{ params: { hostelname: props.hostelname } });
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
    <div className='messmenu-div'>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Snacks</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Mess.map((val, key) => (
            <tr key={key}>
              <td>{val.Day}</td>
              <td>{val.BreakFast}</td>
              <td>{val.Lunch}</td>
              <td>{val.Snacks}</td>
              <td>{val.Dinner}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

