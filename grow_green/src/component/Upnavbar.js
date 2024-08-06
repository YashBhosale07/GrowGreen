import React from 'react'
import navlogo from './img/navlogo.jpg'
import { useNavigate } from 'react-router-dom';
// import addlogo from './img/addlogo.png'


export default function Upnavbar() {
  const navigate=useNavigate();
  return (
    
    <>
      <nav className="navbar navbar-light  " style={{ backgroundColor: "green" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navlogo} alt="" width="30" height="24" className="d-inline-block align-text-top mx-3" />
            GrowGreen
          </a>
          <div>

            <button className="btn btn-outline-dark mx-2" type="submit" style={{ color: 'white' }} onClick={()=>navigate("/Volunteer")}> <i className="bi bi-box-arrow-right"></i> volunteer</button>
          </div>
          <form className="d-flex">

            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit" style={{ color: 'white' }}>Search</button>
          </form>
        </div>
      </nav>
    </>
  );
}
