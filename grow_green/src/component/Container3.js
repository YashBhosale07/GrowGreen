import React from 'react'
import '../component/CSS/Container3.css';
import co3card1 from '../component/img/co3card1.jpg';
import co3card2 from '../component/img/co4card2.jpeg';
import co3card3 from '../component/img/cocard3.jpg';
import co3card4 from '../component/img/cocard4.jpg';
import co3card5 from '../component/img/cocard5.jpg';
import co3card6 from '../component/img/cocard6.jpg';
import co3card7 from '../component/img/cocard7.jpg';
import co3card8 from '../component/img/cocard8.jpeg';
import co3card9 from '../component/img/cocard9.jpg';
import co3card10 from '../component/img/cocard10.jpg';
export default function Container3() {
    let string ="GrowGreen and our champions";
  return (
    <div className='container3'>
      <h1 className='Heading'>See {string} in action!</h1>
          <div className='imgcontainer'>
                <div className="imgcard">
                  <img src={co3card1} alt="" />
                </div>
                <div className="imgcard">
                 <img src={co3card2} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card3} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card4} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card5} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card6} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card7} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card8} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card9} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card10} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card1} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card2} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card3} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card4} alt="" />
                </div>
                <div className="imgcard">
                <img src={co3card4} alt="" />
                </div>
               
          </div>
    </div>
  )
}
