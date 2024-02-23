import React from 'react';
import star from "../images/Star.png"

export default function Card(props) {
  let badgeText; // not defined to make a real value check of the variable badgeText //
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
    
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"


  }
  // console.log(props.item.openSlots);
  return (

    <div className="card">
     {badgeText && <div className='card--badge'>{badgeText}</div>}
     <img className="card--image" src = {props.item.coverImg}    alt="Main card image." />
     <div className='card--stats'>
        <img src ={star} className="card--star" alt='star-image'/>
        <span>{props.item?.stats?.rating}</span>
        <span className='gray'>({props.item.stats.reviewCount}) •</span>
        <span className='gray'>{props.item.location}</span>
     </div>
     <h2 className='title--text'>{props.item.title}</h2>
     <p> className='card--price' <span className='bold'>From ${props.item.price}</span> / person</p>
    </div>
  )
}

