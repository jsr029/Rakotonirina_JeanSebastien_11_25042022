import React from 'react'
import Background from '../../assets/Background.png'

function TopAfterBanner() {
    return (
        <div className="lmj-bg">				
        <img src='./img/AboutTopImage.png' alt='bg-kasa' className='lmj-bg-img' />
        <img src={Background} alt='bg-kasa' className='lmj-bg-bg' />
    </div>
    );
};

export default TopAfterBanner