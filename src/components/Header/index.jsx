import Background from '../../assets/Background.png'
import Img from '../../assets/IMG.png'

function Header(){
    return (
    <div className="lmj-bg">				
        <img src={Img} alt='bg-kasa' className='lmj-bg-img' />
        <img src={Background} alt='bg-kasa' className='lmj-bg-bg' />
        <span className='lmj-header-title'>Chez vous, partout et ailleurs</span>
    </div>
    )
}
export default Header