import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Carouselcomp = ({img1:carousel1,img2:carousel2,img3:carousel3}) => {
    return ( 
        <Carousel>
                <div>
                    <img src={carousel1} alt="carousel1"/>
                    <p className="legend">North Indian Pandit in Banglore</p>
                </div>
                <div>
                    <img src={carousel2} alt="carousel2"/>
                    <p className="legend">Familiar with every state Puja and Rituals</p>
                </div>
                <div>
                    <img src={carousel3} alt="carousel3"/>
                    <p className="legend">Contact for any kind of devasthanam</p>
                </div>
            </Carousel>
     );
}
 
export default Carouselcomp;