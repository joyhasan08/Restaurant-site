
import SwiperBox from "../../Component/Swiper/SwiperBox";
import Banner from "../../Component/Carousel/Banner";
import MidBanner from "../../Component/MidBanner/MidBanner";
import MenuSection from "../../Component/MenuSection/MenuSection";
import EndBanner from "../../Component/MidBanner/EndBanner.jsx";
import Reviews from "../../Component/Review/Reviews.jsx";


import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Pizza hut | Home </title>
            </Helmet>
            <div className="">
                <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto space-y-16">
                <SwiperBox></SwiperBox>
                <MidBanner></MidBanner>
                <MenuSection></MenuSection>
                <EndBanner></EndBanner>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;