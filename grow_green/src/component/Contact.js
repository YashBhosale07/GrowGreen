import React from 'react';
import './CSS/Contact.css';
export default function Contact() {
  return (

    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='containerc' >
        <form className="formc">
          <h3>Get in touch</h3>
          <input type="text" name="name" id="name" placeholder='Enter your name' />
          <input type="email" name="emai" id="email" placeholder='Enter ypur Email adress' />
          <input type="phone" name="phone" id="phone" placeholder='Enter your phone number' />
          <textarea placeholder='Enter your Adress'></textarea>
          <input className='submit' type="submit" value="Submit" />
        </form>
        <div className="info">
          <div className='infoitem'>
            Office:Snket building ulhas cooperativ society shankar nagar-2 Pune-413725
          </div>
          <p>....................................................................................................................................</p>
          <div className='infoitem'>
            Office:Snket building ulhas cooperativ society shankar nagar-2 Pune-413725
          </div>
          <p>....................................................................................................................................</p>
          <div className='infoitem'>
            Office:Snket building ulhas cooperativ society shankar nagar-2 Pune-413725
          </div>
        </div>

      </div>
      <div className="map">
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.401018443502!2d73.75667057506541!3d18.64599228247204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f02f4b8f47%3A0x994b7c247d09fde!2sD.%20Y.%20Patil%20International%20University!5e0!3m2!1sen!2sin!4v1683789487009!5m2!1sen!2sin"
      
        style={{border:"none" ,width:"inherit",height:"inherit"}}
         allowfullscreen=""
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">

          </iframe>
      </div>
    </div>


  )
}
