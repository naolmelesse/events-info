import React from 'react'
import '../styles/Cards.css'


function Cards(props) {
  return (
    <div className='card'>
        <div className='card__body'>
           <img src={props.img} alt='' className='card__image'></img>
           <h2 className='card__title'>{props.title}</h2>

        </div>
        <button className='card__btn'>Learn More</button>
    </div>
  )
}

export default Cards