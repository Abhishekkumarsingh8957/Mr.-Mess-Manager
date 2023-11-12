import Navbar from './components/navbar';
import './App.css';
import Login from './components/login';
import Student from './components/homepage/student';
import Messmenu from './components/hostels/messmenu';
import HostelA from './components/hostels/hostelA';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
     <Navbar /> 
     
    </div>
  );
}

export default App;
