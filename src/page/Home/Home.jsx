
import SwiperBox from "../../Component/Swiper/SwiperBox";
import Banner from "../../Component/Carousel/Banner";
import MidBanner from "../../Component/MidBanner/MidBanner";
import MenuSection from "../../Component/MenuSection/MenuSection";
import EndBanner from "../../Component/MidBanner/EndBanner.jsx";
import Reviews from "../../Component/Review/Reviews.jsx";


const Home = () => {
    return (
        <div>
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
            <h1>Thi is home </h1>
        </div>
    );
};

export default Home;