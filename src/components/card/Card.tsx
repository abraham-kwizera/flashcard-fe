import React from 'react'
import './Style.css';
const Card = () => {
  return (
    <>
      <div className="flipCard">
        <div className="flipCardInner">
        <div className="flipCardFront">
        <h2> Sample Demo </h2>
         </div>
         <div className="flipCardBack">
            <h3>Description</h3>
            <em>
                Description of sample demo contents
            </em>
            <>
            <button className="done">Done</button>
            </>
         </div>
        </div>
      </div>
    </>
  )
}

export default Card;
