import Navbar from './components/navbar';
import './App.css';
import Login from './components/login';
import Student from './components/homepage/student';
import Messmenu from './components/hostels/messmenu';
import HostelA from './components/hostels/hostelA';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Emessmenu from './components/hostels/Emessmenu';
// import {Routes,Route} from 'react-router-dom'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
     <Navbar /> 

    

     {/* <Emessmenu /> */}
     
    </div>
  );
}

export default App;
