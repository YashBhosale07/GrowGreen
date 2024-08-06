import './App.css';
import Bottomnav from './component/Bottomnav';
import Home from './component/Home';
import Contact from './component/Contact'
import Upnavbar from './component/Upnavbar';
import About from './component/About'
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";
import Donate from './component/Donate';
import Order from './component/Order';
import Volunteer from './component/Volunteer';

function App() {
  return (
   <>
     {/* <Router>
        <Navbar title="textutils" about="About Us" Mode={Mode} SwitchMode={SwitchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About Mode={Mode}/>}/>
              
           
            <Route exact path="/" element={<Textform ShowAlert={ShowAlert} heading="Enter the text for anlyze" Mode={Mode} alert={alert} />}/>
             
              
          </Routes>
        </div>
      </Router> */}




   <Router>
    <Upnavbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/About" element={<About/>}/>
    <Route exact path="/Contact" element={<Contact/>}/>
    <Route exact path="/Donate" element={<Donate/>}/>
    <Route exact path="/Order" element={<Order/>}/>
    <Route exact path="/Volunteer" element={<Volunteer/>}/>
    
    </Routes>
    <Bottomnav/>
    </Router>
   </>
  );
}

export default App;
