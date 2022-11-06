import Banner from "./Banner";
import logo from "../images/logo.png"
import "./Navbar.css"
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useEffect } from "react";

const handleClick =()=>{
    var nav_cover=document.getElementsByClassName('nav-cover')  
    if(nav_cover[0].style.display!=="none"){
        nav_cover[0].style.display="none";    
    }      
}

const handleHamClick = ()=>{
    var nav_cover=document.getElementsByClassName('nav-cover')  
    if(nav_cover[0].style.display==="none"){
        nav_cover[0].style.display="inline";    
    }      
}

const Navbar = () => {
    
    useEffect(()=>{
        var nav_cover=document.getElementsByClassName('nav-cover')  
        nav_cover[0].style.display="none";
    });

    return ( 
        <>
        <div className="nav-cover">
            <div className="nav-cover-menu">
                <AiOutlineClose size="3.5em" onClick={handleClick} />
                <div className="nav-cover-list">
                    <Link to="/acharya-portfolio/" onClick={handleClick}>HOME</Link>
                    <Link to="/acharya-portfolio/about" onClick={handleClick}>SERVICES</Link>
                    <Link to="/acharya-portfolio/services" onClick={handleClick}>GALLERY</Link>
                    <Link to="/acharya-portfolio/gallery" onClick={handleClick}>ABOUT US</Link>
                    <Link to="/acharya-portfolio/contact" onClick={handleClick}>CONTACT US</Link> 
                </div>
            </div>
        </div>
        <Banner/>
        <nav className="navbar-body">
            <div className="navbar">
                <div>
                    <img className="logo" src={logo} alt="swastic-logo"/>
                </div>
                <div className="menu-burger">
                    <GiHamburgerMenu size="2.4em" onClick={handleHamClick}/>
                </div>
                <div className="menu-items">
                    <Link to="/acharya-portfolio/">HOME</Link>
                    <Link to="/acharya-portfolio/about">SERVICES</Link>
                    <Link to="/acharya-portfolio/services">GALLERY</Link>
                    <Link to="/acharya-portfolio/gallery">ABOUT US</Link>
                    <Link to="/acharya-portfolio/contact">CONTACT US</Link> 
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;