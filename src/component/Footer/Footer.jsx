import "./Footer.css"
import Logo from "../Footer/Footer.png"
import Fb from "../Footer/fb.png"
import Insta from "../Footer/insta.png"
import Twit from "../Footer/twi.png"
export default function Footer() {



    return (
        <div className="footer">
            <div className="desc">
                <div  className="logo"><img src={Logo} alt="logo" /></div>
                <div className="paragraph">Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</div>
<div><span className="fb"><img src={Fb} alt="fb"/></span><span className="insta"><img src={Insta} alt="insta.logo"/></span><span className="twit"><img src={Twit} alt="twitter"/></span></div>

            </div>
<div className="contant">
<ul>
<div className="company">Company</div>
<li>About us</li>
<li>News</li>
<li>Career</li>
<li>How we are work</li>

</ul>


</div>



        </div>
    )


}