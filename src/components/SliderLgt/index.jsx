import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SliderLgt({ data, isLoading, error }) {
	const urlW = window.location.href
	const urlId = urlW.split('/')[4]

	if (error) {
		return <span>Il y a un problème</span>
	}
  return isLoading ?  (<div className='loader'>Chargement...</div>) :(
    
            data && data.length>0 && data.map((item, i) => 
            (urlId === item.id)  ?  (
            <Carousel autoPlay infiniteLoop key={(i+50)}>						
                {item.pictures.map((p, n)=>(
                <div key={'stuff '+(n+100)}>
                  <img src={p} alt="" key={(n+200)}/>
                </div>
                ))}
            </Carousel>
              ) 
              : ''
              )
          
);
};

export default SliderLgt