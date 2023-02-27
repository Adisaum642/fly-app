import './Header.css'
import Logo from '../Header/Combined-Shape.png'
import Notification from '../Header/Vector.png'


export default function Header() {
  return (
     <div className="header-box">
       <span className="logo">
    <img src={Logo} alt="logo"/>
     </span>
<span className="explore" >Explore</span>
<span className="search">Search</span>
<span className="hotal">Hotal</span>
 <span className="offer">Offer</span> 
 <span className="notif"><img src={Notification} alt="notification"/></span>      
     </div>
  );
}