import React from 'react';
import Receiverlist from './Receiverlist';
// import bgimg from './img/bgimg.jpg';
import Bottomnav from './Bottomnav';
import './Receiver.css';

export default function Receiver() {
  return (
    <>
      <div className="container-fluid my-4" style={{width:"inherit",height:"inherit"}} >
        <div className='row mx-4'>
        <Receiverlist />
        <Receiverlist />
        <Receiverlist />
        <Receiverlist />
        <Receiverlist />
        
        </div>
        <Bottomnav />
         </div>

    </>
  );
};
