import React, { useState } from 'react';
import ReactStars from 'react-stars'
import SliderLgt from '../../components/SliderLgt'
import SlideToggle from 'react-slide-toggle';


function FicheLogement({ data, isLoading, error }) {
	const ratingChanged = (newRating) => {
		console.log(newRating)
	  }
		  const [rotate, setRotate] = useState(false);
	  function handleClick(){
		  setRotate((prevState) => (!prevState ));
	  }
	const [rotate2, setRotate2] = useState(false);
	  function handleClick2(){
		  setRotate2((prevState2) => (!prevState2 ));
	  }

	const urlW = window.location.href
	const urlId = urlW.split('/')[4]

	if (error) {
		return <span>Il y a un problème</span>
	}
	return isLoading ?  (<div className='loader'>Chargement...</div>) : 
	(
		<>
		<SliderLgt data={data} isLoading={isLoading} error={error} />
		<div className='lgt-fiche'>						
					{data && data.length && data.map((d,a) =>
					(urlId === d.id) ? (
						<React.Fragment key={(3*a)}>
							<div className='lgt-fiche-underImg-bloc'>
								<div className='lgt-fiche-title-bloc'>
									<div className='lgt-fiche-title'>
										{d.title}
									</div>
									<div className='lgt-fiche-location'>
										{d.location}
									</div>
								</div>
								<div className='lgt-fiche-host-bloc'>
									<div className='lgt-fiche-host'>
										<div className='lgt-host-name'>
											{d.host.name.split(' ')[0]} <br />
											{d.host.name.split(' ')[1]} 
										</div>
										<div className='lgt-host-pict'>
											<img src={d.host.picture} alt={'Photo de profil de : '+d.host.name} />
										</div>
									</div>
								</div>									
							</div>
							<div className='lgt-fiche-tagsRatingBloc'>
								<div className='lgt-fiche-tags' key={'tags'+(2*a+2)}>
									{d.tags.map((t, ta) => <span key={'tag'+(ta+1)}>{t}</span> )}
								</div>
								<div className='lgt-fiche-rating'>
									<ReactStars data={data} key={'rating'+(3*a+5)}
										count={5}
										value={parseInt(d.rating)}
										size={24}
										color2={'#ffd700'} 
										onchange={ratingChanged}
										/>
								</div>
							</div>
							<div className='lgt-fiche-togglesBloc'>
							<SlideToggle data={data}
							duration={800}
							collapsed={true}
							>
								{({ toggle, setCollapsibleElement }) => (
									<div className="my-collapsible lgt-fiche-description">
										<h2>
											<span className='lgt-fiche-left'>Description</span>
											<span className='lgt-fiche-right my-collapsible__toggle'  onClick={toggle}>
													<img src='http://127.0.0.1:3000/img/arrowUpDown.png' alt='Flèche toggle up down' className={'lgt-fiche-hat '+(rotate ? 'up' : 'down')} onClick={handleClick} />
											</span>
										</h2>
										<div className="my-collapsible__content" ref={setCollapsibleElement}>
											<p className="my-collapsible__content-inner">{d.description}</p>
										</div>
									</div>
								)}
							</SlideToggle>
							<SlideToggle data={data}
									duration={800}
									collapsed={true}
									>
								{({ toggle, setCollapsibleElement }) => (
								<div className='my-collapsible lgt-fiche-equipment'>
									<h2>
										<span className='lgt-fiche-left'>Equipements</span>
										<span className='lgt-fiche-right my-collapsible__toggle'  onClick={toggle}>
											<img src='http://127.0.0.1:3000/img/arrowUpDown.png' alt='Flèche toggle up down' className={'lgt-fiche-hat '+(rotate2 ? 'up2' : 'down2')} onClick={handleClick2} />
										</span>
									</h2>
									<div className="my-collapsible__content" ref={setCollapsibleElement}>
										<ul>{d.equipments.map((e, z) => <li key={z+23}>{e}</li>)}</ul>
									</div>
								</div>
								)}
							</SlideToggle>
							</div>
						</React.Fragment>
						) : ''
					)}
			</div>
		</>
	)

}
  
export default FicheLogement;
