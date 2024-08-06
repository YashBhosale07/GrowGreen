import React, { useState } from 'react'
import '../component/CSS/Container4.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export default function Container4() {
  const [countOn, setcountOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setcountOn(true)} onExit={() => setcountOn(false)}>
      <div className='container4'>
        <div className="counter">
          <h1>
            {countOn && <CountUp start={0} end={10000} duration={2} delay={0} />}
            +
            <p> Tree Donated</p>
          </h1>
        </div>
        <div className="counter">
          <h1>
            {countOn && <CountUp start={0} end={5000} duration={2} delay={0} />}
              Kg+
            <p> Seed Donated</p>
          </h1>
        </div>
        <div className="counter">
          <h1>
            {countOn && <CountUp start={0} end={100000} duration={2} delay={0} />}
             Ltr+
            <p> Water Donated </p>
          </h1>
        </div>

      </div>
    </ScrollTrigger>
  )
}
