import React from 'react'

function QualiteItem({ id, name, description }) {
    return (
        <>
            <h2>
                <span className='lgt-fiche-left' key={id}>{name}</span>
                <span className='lgt-fiche-right'>
                    <img src='./img/arrowUpDown.png' alt='' className='lgt-fiche-hat' />
                </span>
            </h2>
            <p>
                {description}
            </p>
        </>
    );
};

export default QualiteItem