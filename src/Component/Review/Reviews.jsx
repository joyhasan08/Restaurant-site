import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../utils/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const getData = async () => {
        await fetch(`reviews.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <section>
                <SectionTitle
                    heading={'TESTIMONIALS'}
                    subHeading={'---What Our Clients Say---'}
                ></SectionTitle>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id} >
                            <div className='max-w-3xl space-y-1 mx-auto'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className='flex  gap-2'>
                                    <span className='text-4xl'>🙂</span>
                                    <h1 className='text-3xl'>{review.name}</h1>
                                </div>
                                <p >{review.details}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Reviews;