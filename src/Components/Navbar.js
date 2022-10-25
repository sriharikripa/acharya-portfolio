import Banner from "./Banner";
import logo from "../images/logo.png"
import "./Navbar.css"

const Navbar = () => {
    return ( 
        <>
        <Banner/>
        <nav className="navbar-body">
            <div className="navbar">
                <div>
                    <img className="logo" src={logo} alt="swastic-logo"/>
                </div>
                <div className="menu-items">
                    <div>HOME</div>
                    <div>SERVICES</div>
                    <div>GALLERY</div>
                    <div>ABOUT US</div>
                    <div>CONTACT US</div>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;