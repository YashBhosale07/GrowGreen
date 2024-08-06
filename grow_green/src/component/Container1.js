import React from 'react'
import "./CSS/Container1.css";
import { useNavigate } from 'react-router-dom';
// import Upnavbar from './Upnavbar';
export default function Container1() {
  
  //  let [text,settext]=useState("Plant");
  
    
   
  //  setTimeout(() => {
  //   settext("Grow");
    
  //  }, 1000);
  const navigate=useNavigate();
  
  return (
    <>
    {/* <Upnavbar/> */}
   <div className="container1">
    {/* <marquee behavior="fast" direction="">Well-Come in green environment</marquee> */}
     <h1>Save The Planet!</h1>
     <h2 >Grow Green</h2>

    <div className="btn" >
      <button onClick={()=>navigate("/Donate")} >Donate Now</button>
      <button onClick={()=>navigate("/Order")}>Order  Now</button>
    </div>

   </div>
   </>
  )
}
