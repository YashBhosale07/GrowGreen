import React, { useState } from 'react'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { Groups2 } from '@mui/icons-material';
import { LocalPhone } from '@mui/icons-material';
import BottomNavigation from '@mui/material/BottomNavigation';
import { useNavigate } from 'react-router-dom';
 import './CSS/Bottomnav.css'




export default function Bottomnav() {
    let [value, setValue] = useState(0);
    const navigate=useNavigate();
  

    return (
         <div className='bnav'>
        <BottomNavigation
        className='fs-1'
        sx={{ position:'fixed',bottom: 0,width: "100%",background:"inherit"}}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            style={{backgroundColor:'green'}}
        >

            <BottomNavigationAction 
             label="HOME" 
             onClick={()=>navigate("/")}
             icon={<AddHomeIcon 
              
             style={{marginTop:5}}
             />} 
             style={{color:"white",fontWeight:"bold"}}/>
            <BottomNavigationAction 
            label="About Us"
            onClick={()=>navigate("/About")}
            icon={<Groups2 
            style={{marginTop:5,fontWeight:"bold"}}
             />} 
             style={{color:"white", fontWeight:"bold"}}
             />
            <BottomNavigationAction 
            label="CONTACT US"
            onClick={()=>navigate("/Contact")} icon={<LocalPhone 
          
            style={{marginTop:5}}
             />} 
             style={{color:"white" ,fontWeight:"bold"}}/>
              </BottomNavigation>
              </div>
    );
}

