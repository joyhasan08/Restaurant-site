import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import slideImg1 from './../../assets/home/slide1.jpg'
import slideImg2 from './../../assets/home/slide2.jpg'
import slideImg3 from './../../assets/home/slide3.jpg'
import slideImg4 from './../../assets/home/slide4.jpg'
import SectionTitle from '../../utils/SectionTitle';

const SwiperBox = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"Friday to Sunday"}
                heading={"Top Selling"}
            ></SectionTitle>
            <Swiper
                centerMode={'true'}
                spaceBetween={10}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg1} alt="" />
                        <h1 className='text-3xl absolute bottom-2 bg-slate-300 px-8 py-4  '>Salad</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg2} alt="" />
                        <h1 className='text-3xl absolute bottom-2 bg-slate-300 px-8 py-4  '>Pizza</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg3} alt="" />
                        <h1 className='text-3xl max-w-[200px] absolute bottom-2 bg-slate-300 px-8 py-4  '>Soup</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg4} alt="" />
                        <h1 className='text-3xl absolute bottom-2 bg-slate-300 px-8 py-4  '>Cake</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg2} alt="" />
                        <h1 className='text-3xl absolute bottom-2 bg-slate-300 px-8 py-4  '>Pizza</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={slideImg3} alt="" />
                        <h1 className='text-3xl max-w-[200px] absolute bottom-2 bg-slate-300 px-8 py-4  '>Soup</h1>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </div >
    );
};

export default SwiperBox;