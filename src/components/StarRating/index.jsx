import React, { useState } from "react";

const StarRating = (props) => {
    const [rating, setRating] = useState(0);
    return (
      <>
      <div className="star-rating">
        {[...Array(props.value)].map((star, index) => {
          index += 1;
          return (
            <div
              key={index}
              value={props.rating}
              className={rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="pinkStar"><img src="http://127.0.0.1:3000/img/pinkStar.png" alt="Star" /></span>
            </div>
          );
        })}
      </div>
      <div className="emptyStar">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <div
              key={index}
              value={props.rating}
              className={rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="pinkStar"><img src="http://127.0.0.1:3000/img/star.svg" alt="Star" /></span>
            </div>
          );
        })}
      </div>
      </>
    );
  };
    
  
export default StarRating;
