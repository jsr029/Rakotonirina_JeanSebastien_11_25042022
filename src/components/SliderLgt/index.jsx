import React from "react";
import { useFetch } from "../Utils/Hooks";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SliderLgt() {
	const urlW = window.location.href
	const urlId = urlW.split('/')[4]

	const { data, isLoading, error } = useFetch(
		`http://127.0.0.1:3000/json/logements.json`
	)
	console.log(data)
	if (error) {
		return <span>Il y a un problème</span>
	}
  return isLoading ?  (<div className='loader'>Chargement...</div>) :(
    
            data && data.length>0 && data.map((item, i) => 
            (urlId === item.id)  ?  (
            <Carousel autoPlay key={i}>						
                {item.pictures.map((p, n)=>(
                <div key={'stuff'+(n+1)}>
                  <img src={p} alt=""/>
                </div>
                ))}
            </Carousel>
              ) 
              : ''
              )
          
);
};

export default SliderLgt