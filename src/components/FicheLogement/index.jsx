import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Background from '../../assets/Background.png'

function FicheLogement() {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('json/logements.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
    return (
	<div className='lmj-shopping-list'>
		<div className='lmj-plant-list'>
            <div className="lmj-layout-inner">
            {
                data && data.length>0 && data.map((item)=>
                <Link to={'/fiche-logement/'+ item.id + '/' + item.title.replace(/\s+/g, '-').toLowerCase()} key={item.id}>
                    <li className='lmj-plant-item'>
                        <img className='lmj-plant-item-cover' src={item.cover} alt={`${item.cover}`} />
                        <img className="lmj-plant-item-background" src={Background} alt={item.id} />
                        <div className="lmj-plant-item-title">{item.title}</div>
                    </li>
                    </Link>
                    )
            }
            </div>
        </div>
    </div>
    );
  }
  
  export default FicheLogement;
  