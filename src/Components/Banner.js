import data from '../data.json'
import './Banner.css'

import {BsYoutube,BsFacebook,BsTwitter,BsInstagram,BsTelephoneFill} from 'react-icons/bs'

const Banner = () => {
    return ( 
        <div className="banner-body">
            <div className="banner">
                <div className="contact"><BsTelephoneFill/> {data.contact}</div>
                <div className="social-media">
                <BsYoutube/>       
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>
                </div>
            </div>
        </div>        
     );
}
 
export default Banner;