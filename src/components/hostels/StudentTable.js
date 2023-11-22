import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import { AiFillHome } from 'react-icons/ai';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { FaEdit,FaDatabase } from "react-icons/fa";
export default function StudentTable() {
    const location = useLocation();
  const hostel = location.state?.hostel;
      const [unblocked,setStatus]=useState(true)
    const navigate=useNavigate();
    const [students,setData]=useState([{
        name:"",
        reg:"",
        status:true,
        _id:"",
    }])

   
    useEffect(() => {
        axios.get('http://localhost:8080/registerstudent',{ params: { hostel: hostel } })
          .then((res) => {
           
            
            const data = res.data.map(item => ({
              name: item.name,
              reg: item.reg,
              status:item.status,
              _id:item._id,
            }));
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const change = (id, status) => {
        const newStatus = !status;
        axios.put(`http://localhost:8080/registerstudent/${id}`, { status: newStatus })
          .then((response) => {
            console.log('Status updated successfully:', response.data);
            // Update the local state if needed
            const updatedStudents = students.map(student => {
              if (student._id === id) {
                return { ...student, status: newStatus };
              }
              return student;
            });
            setData(updatedStudents);
          })
          .catch((error) => {
            console.error('Error updating status:', error);
          });
      };
      

  return (
    <div className='body-student'>
        <div className='navbar'>
        <div className='title'>{hostel}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li>
            <Link to={'/Emessmenu'}><u>EditMessMenu</u></Link>
            <FaEdit size={22}/>
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
      <h3 className='mess-menu-title'> Student Data </h3>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Registration Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} style={{height:'auto'}}>
            <td >{student.name}</td>
             <td>{student.reg}</td>
            <td><button className='block' onClick={()=>change(student._id,student.status)}  style={{
    width: 'auto', 
    padding: '5px 10px', 
    border: 'solid black .5px',
    fontSize: '12px',
    textAlign: 'center', 
    cursor: 'pointer', 
    backgroundColor: student.status ? 'red' : 'green', 
    color: 'white', 
    borderRadius: '4px', 
  }}> {student.status?"Block":"unblock"}</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
