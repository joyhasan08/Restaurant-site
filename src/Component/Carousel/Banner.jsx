import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerImg1 from './../../assets/home/01.jpg'
import bannerImg2 from './../../assets/home/02.jpg'
import bannerImg4 from './../../assets/home/04.jpg'

const Banner = () => {
    return (
        <div className="">
            <Carousel
                autoPlay={'interval'}
                infiniteLoop='true'
                thumbWidth={100}
            >
                <div>
                    <img src={bannerImg1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={bannerImg2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={bannerImg4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;