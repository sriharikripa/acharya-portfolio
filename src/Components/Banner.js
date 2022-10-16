import data from '../data.json'
import './Banner.css'

import {BsYoutube,BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'

const Banner = () => {
    return ( 
        <div className="banner">
            <div className="contact">Contact: {data.contact}</div>
            <div className="social-media">
            <BsYoutube/>       
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            </div>
        </div>        
     );
}
 
export default Banner;