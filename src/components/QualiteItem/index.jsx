import React, { useState } from 'react'
import SlideToggle from 'react-slide-toggle';

function QualiteItem({ id, name, description }) {
   const [nam, setName] = useState(false)
    function clickHandler(){
        setName((prevState) => (!prevState ));
    }
    return (
        <>
        <SlideToggle 
            duration={800}
            collapsed={true}
                >
            {({ toggle, setCollapsibleElement }) => (
				<div className="my-collapsible">
                    <h2>
                        <span className='lgt-fiche-left' key={id}>{name}</span>
                        <span className='lgt-fiche-right' onClick={toggle}>
                            <img src='./img/arrowUpDown.png' alt='' className={'lgt-fiche-hat ' + (nam ? 'up' : 'down')} onClick={clickHandler}/>
                        </span>
                    </h2>
					<div className="my-collapsible__content" ref={setCollapsibleElement}>
						<p className="my-collapsible__content-inner">{description}</p>
                    </div>
                </div>
                )}
        </SlideToggle>
        </>
    );
};

export default QualiteItem