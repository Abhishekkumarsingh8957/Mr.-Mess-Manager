import Navbar from './components/navbar';
import './App.css';
import Login from './components/login';
import Student from './components/homepage/student';
import Messmenu from './components/hostels/messmenu';
import HostelA from './components/hostels/hostelA';
function App() {
  return (
    <div className="App">
      
     <Navbar /> 
       <Student/>  {/*  */}
        
       <HostelA/>
    </div>
  );
}

export default App;
