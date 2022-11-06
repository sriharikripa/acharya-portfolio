import './Footer.css'
import {BiLocationPlus,BiPhoneCall,BiMailSend, BiGlobe} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer-body">
                <footer className='footer'>
                    <div className="contact-info">
                        <div className="heading"> CONTACT INFO</div>
                        <br />
                        <div className="address"><BiLocationPlus/>3JRR+Q94, Behind Haj committee bhavan, siddhivinayaka layout, Bellahalli, Karnataka 560064 </div>
                        <br />
                        <div className="phone"><BiPhoneCall/>+91-9721604436</div>
                        <br />
                        <div className="email"> <BiMailSend/> test@test.com </div>
                        <br />
                        <div className="website"> <BiGlobe/> test.com </div>
                    </div>
                    <div className="links">
                        <div className="links-page">LINKS</div>  
                            <br />                                              
                            <Link to="/acharya-portfolio/">HOME</Link>
                            <br />
                            <br />
                            <Link to="/acharya-portfolio/about">ABOUT US</Link>                            
                            <br />
                            <br />
                            <Link to="/acharya-portfolio/services">SERVICES</Link>                            
                            <br />
                            <br />
                            <Link to="/acharya-portfolio/gallery">GALLERY</Link>                            
                            <br />
                            <br />
                            <Link to="/acharya-portfolio/contact">CONTACT US</Link>
                                           
                    </div>
                    <div className="maps">
                    <iframe title="map-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.081092045716!2d77.6392617162432!3d13.089659427047964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19903901450d%3A0x91a3c84386949f9d!2sSree%20Radha%20Shyamsundar%20Mandir!5e0!3m2!1sen!2sin!4v1666806837292!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </footer>    
        </div>        
     );
}
 
export default Footer;