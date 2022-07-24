import React from 'react'
import '../styles/Online.scss'
import ONLINE1 from '../assets/online1.jpg'
import ONLINE2 from '../assets/online2.jpg'
import ONLINE3 from '../assets/online3.jpg'

function Online() {
  return (
    <div>
      <div className="title">
        <div className="intro-text">
          <h1 className='online__heading'>Online Coaching</h1>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <br/>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className='online__btn'>LEARN MORE</button>
        </div>

           
      </div>
      <div className='imagecollection' >
          <img src={ONLINE1} alt='' className='pic'/>
          <img src={ONLINE2} alt=''className='pic2'/>
          <img src={ONLINE3} alt=''className='pic3'/>
          <div className='circle'></div>
          <div className='circle2'></div>
          <div className='smallcircle'></div>
      </div>
    </div>


  )
}

export default Online