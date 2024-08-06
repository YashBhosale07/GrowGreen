import React from 'react'
import "../component/CSS/Container2.css"
// import card1img from '../component/img/card1img.avif';
import card3img from '../component/img/card3img.png';
import treecard from '../component/img/treecard.png';
import seedcard from '../component/img/seedcard.jpg';
export default function Container2() {
  return (
    <>
      <div className="mission">
        <h1 className="heading">Our Mission</h1>
        <div className="cardcontainer">
          <div className="card1">
            <h4>Donate Water</h4>
              <div className='imgcontainer'>
              <img src={card3img} alt="" />
              <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa, numquam facere accusamus id Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id?</p>
              

              </div>


          </div>
          <div className="card1">
            <h4>Donate Trees</h4>
            <div className='imgcontainer'>
              <img src={treecard} alt="" />
              <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa, numquam facere accusamus id Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id?</p>
              

              </div>


          </div>
          <div className="card1">
            <h4>Donate Seeds</h4>

            <div className='imgcontainer'>
              <img src={seedcard} alt="" />
              <p style={{marginTop:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa, numquam facere accusamus id Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, id?</p>
              

              </div>

          </div>
        </div>
      </div>
    </>

  )
}
