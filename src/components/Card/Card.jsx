// @flow
import React from 'react';
import { CiBookmark,  } from 'react-icons/ci';
import './Card.scss';


const Card  = (props) => {

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('.card__footer').style.display = 'block';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('.card__footer').style.display = 'none';
  };
  
  return (
    // <div className="wrapper">
    <div className="card" 
    style={{ backgroundImage: `url(${props.img})`,
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    backgroundSize: "cover",
     width: "263px", 
     height: "197.25px"}} 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className="card__body">
        {/* <img src={props.img} className="card__image" alt={props.title} /> */}
       
      </div>
      <div className="card__footer">
         <CiBookmark />
      </div>
      
    </div>
    // </div>
  );
};


export default Card;
