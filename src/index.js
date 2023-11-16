import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Student from './components/homepage/student';
import Chiefwarden from './components/homepage/chiefwarden';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Accountant from './components/homepage/Accountant';
import HostelA from './components/hostels/hostelA';
import Register from './components/register';
import Registerw from './components/registerw';
import Registera from './components/registera';
import Login from './components/login';


const router=createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:'/chiefwarden',
  element:<Chiefwarden/>
},{
  path:'/hostel',
  element:<HostelA/>
},{
  path:'/register',
  element:<Register/>
},
{
  path:'/registerw',
  element:<Registerw/>
},
{
  path:'/registera',
  element:<Registera/>
},
{
  path:'/login',
  element:<Login/>
},

{
  path:'/student',
  element:<Student/>
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
