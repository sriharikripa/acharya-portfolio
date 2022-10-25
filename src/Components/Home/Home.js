
import Carouselcomp from '../Carouselcomp';
import carousel1 from '../../images/carousel1.jpg'
import carousel2 from '../../images/carousel2.jpg'
import carousel3 from '../../images/carousel3.jpg'
import punditimg from '../../images/punditimg.png'
import puja1 from '../../images/puja1.jpg'
import puja2 from '../../images/puja2.jpg'
import puja3 from '../../images/puja3.jpg'
import puja4 from '../../images/puja4.jpg'
import puja5 from '../../images/puja5.jpg'
import puja6 from '../../images/puja6.jpg'
import puja7 from '../../images/puja7.jpg'
import puja8 from '../../images/puja8.jpg'
import './Home.css'
import Imagecards from '../Imagecards';


const Home = () => {
    return (
        <div className="home-body">
            <Carouselcomp img1={carousel1} img2={carousel2} img3={carousel3} />
            <div className="about-pundit-body">
                <div className="about-pundit">
                    <div className="pundit-img">
                        <img src={punditimg} alt="" />
                    </div>
                    <div className="pundit-desc">
                        <h2>WELCOME TO ACHARYA KESHAV JI</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries
                            , but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and 
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries
                            , but also the leap into electronic typesetting, remaining 
                            essentially unchanged. It was popularised in the 1960s with 
                            the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.
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
        </div>
    );
}

export default Home;