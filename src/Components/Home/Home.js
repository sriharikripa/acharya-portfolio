import { Link } from 'react-router-dom';
import Carouselcomp from '../Carouselcomp';
import carousel1 from '../../images/carousel1.webp'
import carousel2 from '../../images/carousel2.webp'
import carousel3 from '../../images/carousel3.webp'
import punditimg from '../../images/punditimg.webp'
import puja1 from '../../images/puja1.webp'
import puja2 from '../../images/puja2.webp'
import puja3 from '../../images/puja3.webp'
import puja4 from '../../images/puja4.webp'
import puja5 from '../../images/puja5.webp'
import puja6 from '../../images/puja6.webp'
import puja7 from '../../images/puja7.webp'
import puja8 from '../../images/puja8.webp'
import './Home.css'
import Imagecards from '../Imagecards';


const Home = () => {
    return (
        <div className="home-body">
            <Carouselcomp img1={carousel1} img2={carousel2} img3={carousel3} />
            <div className="about-pundit-body">
                <div className="about-pundit">
                    // <div className="pundit-img">
                    //     <img src={punditimg} alt="" />
                    // </div>
                    <div className="pundit-desc">
                        <h2>WELCOME TO ACHARYA KESHAV JI</h2>
                        <p>
                            Being a North Indian Pandit in bangalore shastri Ji 
                            serves exact and customized religious needs with pooja 
                            samagri at a reasonable Dakshina. Services offered by 
                            Acharya Keshav Ji specializes in conducting religious 
                            rituals like Naming ceremony, Vastu shanti, New Office,pravesh, 
                            Birthday ceremony puja, Mundan ceremony, Thread wearing ceremony, 
                            SatyaNarayan Pooja and Griha Pravesh in and around Bangalore.
                        </p>
                        <p>
                        Acharya Keshav Ji is also famous as a Bihari Pandit in Bangalore . 
                        He provide all kind of Puja and anushthan services according to Bihar 
                        culture He conducts different religious ceremonies at your place.he provides 
                        one stop solutions for all types of puja with puja samagri.if You are 
                        looking to book online Bihari pandit in bangalore you can do it directly 
                        through this website. He is a well known pandit in Bangalore.
                        </p>
                        <div className="pundit-button">
                            <button className='pundit-contact'>CONTACT NOW</button>
                            <button className='pundit-read'>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="puja-img-body">
                <div className="puja-img-row-one">
                    <Imagecards img={puja1} text="Ganesh Sthapana"/>
                    <Imagecards img={puja2} text="Satyanarayan Pooja"/>
                    <Imagecards img={puja3} text="Vastu Shanti"/>
                    <Imagecards img={puja4} text="Vivah"/>
                </div>
                <div className="puja-img-row-two">
                    <Imagecards img={puja5} text="Grah Pravesh"/>
                    <Imagecards img={puja6} text="Vrat"/>
                    <Imagecards img={puja7} text="Shradh"/>
                    <Imagecards img={puja8} text="Graha Yagna"/>
                </div>
            </div>
            <div className="pundit-details">
                <h1>Best North Indian Pundit in Banglore</h1>
                <p>Being a North Indian Pandit in bangalore shastri Ji 
                   serves exact and customized religious needs with pooja samagri at a 
                   reasonable Dakshina. Services offered by Acharya Keshav Ji specializes 
                   in conducting religious rituals like Naming ceremony, Vastu shanti, 
                   New Office,pravesh, Birthday ceremony puja, Mundan ceremony, Thread wearing 
                   ceremony, SatyaNarayan Pooja and Griha Pravesh in and around Bangalore.
                </p>
                <p>
                    Appropriate date and time for performing the ceremony can be suggested by the 
                    pandits by referring to panchang. Customers can book Best pandit in bangalore 
                    of their choice along with samagri, or they themselves can arrange for the pooja 
                    essentials.we have a group of pandits settled down in Bangalore to serve all kinds
                    of puja related to every state. Materials necessary for pooja can also be 
                    purchased from the website while booking pandits. Pandits will perform pooja 
                    as per the customers state rituals, language, and community. Nowadays many 
                    commercial websites are available for booking pandits online, It is necessary 
                    to carry out proper research and review for choosing an honest site to book best 
                    Hindi Pandit in Bangalore and one of the best websites for availing pooja 
                    services online as Acharya Keshav Ji has more than 10 
                    years of experience. Also, His Dakshina for pooja is reasonable and less when 
                    compared with other service providers. Different Social media panels of shastri 
                    ji can be used to book North Indian Pandits in Bangalore. To book pandits 
                    the user have to access any of the pooja service provided by us , the user have 
                    to leave an inquiry with the pooja they want to perform.
                </p>
                <ul>
                    <li>
                        All the details about puja along with the shastri ji contact details is available
                        in the website.if you are looking for Best north indian Pandit in bangalore for performing pooja you are on the right page a complete catalog of best pandits in available here.
                    </li>
                    <li>
                        The puja includes Dakshina, samagries, Havan and flowers and fruits necessary for pooja. 
                    </li>
                    <li>
                        The user can either request the pandit to fix the date for pooja by providing the rasi and Nakshatra of the person. Acharya Keshav Ji is also known as the best
                        Bihari pandit in Bangalore to perform all the puja and rituals related to Bihar .
                    </li>
                    <li>
                        The devotees can make advance Dakshina for pooja through this website. It can be done through cash, Net banking, and UPI payments also.
                    </li>
                </ul>

                <h1>
                    Looking for best Hindi, Bihari or North Indian Pandit in Bangalore ?
                </h1>
                <p>
                    Acharya Keshav Ji is also famous as a Bihari Pandit in Bangalore . He provide all kind of Puja and anushthan services according to Bihar culture He conducts 
                    different religious ceremonies at your place.he provides one stop solutions for all types of puja with puja samagri.if You are looking to book online Bihari pandit in 
                    bangalore you can do it directly through this website. He is a well known pandit in Bangalore.
                </p>
                <div className="pundit-button">
                    <Link to="/acharya-portfolio/contact" className='pundit-contact-button'>CONTACT NOW</Link>                            
                </div>
            </div>                            
        </div>
    );
}

export default Home;
