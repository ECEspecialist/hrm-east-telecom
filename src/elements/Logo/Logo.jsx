import logoImg from '../../image/logo_1.png';
import './Logo.css';
function Logo(){
     return(
          <div className='logo-container'>
               <img className="logo-img" src={logoImg} alt="logo" />
               <span className="logo-title">EAST TELECOM</span>
          </div>
     )
}

export default Logo