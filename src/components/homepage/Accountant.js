import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '..//../design/homepagedesign/Accountant.css'
import { RiLogoutCircleFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
const Accountant = () => {
   const location=useLocation();
   const userData=location.state?.userData;
  const navigate=useNavigate();

  const [ordersData, setOrdersData] = useState([
  
  ]);

   

  useEffect(() => {
   
    const storedData = JSON.parse(localStorage.getItem("orderdata") || "[]");
    setOrdersData(storedData);
  }, []);


  const [newOrder, setNewOrder] = useState({
    date: '',
    hostelname:userData.hostel,
    product: '',
    quantity: 0,
    total: 0,
    price:0,
  });
   
 
  const addOrder = () => {
    const calculatedTotal = newOrder.quantity;
    const currentDate = new Date().toISOString().split('T')[0];
    const orderToAdd = { ...newOrder, total: calculatedTotal, date: currentDate };
    setOrdersData([...ordersData, orderToAdd]);
    setNewOrder({
      date: currentDate,
      product: '',
      quantity: 0,
      total: 0,
      price: 0,
      hostelname: userData.hostel,
    });
    localStorage.setItem("orderdata", JSON.stringify([...ordersData, orderToAdd]));
  };
 
  const sendData = async () => {
    try {
      console.log("hii");
      
      const response = await axios.post('http://localhost:8080/expense',  ordersData );
      console.log(ordersData)
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: name === 'quantity'||name==='price' ? parseInt(value, 10) : value,
    }));
  };

  const deleteOrder = (index) => {
    const newOrdersData = [...ordersData];
    newOrdersData.splice(index, 1);
    setOrdersData(newOrdersData);
  
   
    localStorage.setItem("orderdata", JSON.stringify(newOrdersData));
  };

  return (
    <div className='body-student'>
       <div className='navbar'>
        <div className='title'>{userData.hostel}</div>
        <ul className='list-items'>
          <li>
            <u>Home</u>
            <AiFillHome size={25} />
          </li>
          <li onClick={() => { navigate('/');  }}>
            <u>Logout</u>
            <RiLogoutCircleFill size={25} />
          </li>
        </ul>
      </div>

      
        <h3 className='mess-menu-title'>Daily Orders</h3>
        <form className='add-bar'>
        <button type="button" className="add-button" onClick={addOrder}>
            Add Order
          </button>
          <label >
            Product:&nbsp;
            <input
              type="text"
              name="product"
              value={newOrder.product}
              onChange={handleInputChange}
              style={{ width: '10vw',height:'.45vh',border:'none' }}
            />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Quantity:&nbsp;
            <input
              type="number"
              name="quantity"
              value={newOrder.quantity}
              onChange={handleInputChange}
              style={{ width: '2vw',height:'3.5vh',border:'none' }}
            />
          </label>
          &nbsp;&nbsp; <label>
            Price:&nbsp;
            <input
              type="number"
              name="price"
              value={newOrder.price}
              onChange={handleInputChange}
              style={{ width: '5vw',height:'3.5vh',border:'none' }}
            />
          </label>
          
        </form>
          <br/>
        <table >
          
            <tr>
              <th>Date</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
            <tbody>
            {ordersData.length > 0 && ordersData.map((order, index) => (
          <tr key={index}>
           <td>{order.date}</td>
           <td>{order.product}</td>
           <td>{order.quantity}</td>
           <td>{order.total}</td>
          <td>
        <button
          className="delete-button"
          onClick={() => deleteOrder(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
          
        </table>
         <button className='add-button' onClick={()=>sendData()}>sendExpense</button>
    </div>
  );
};

export default Accountant;
