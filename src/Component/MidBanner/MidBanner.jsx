import MidBannerImg from './../../assets/home/chef-service.jpg'
import './../MidBanner/EndStyle.css'

const MidBanner = () => {
    return (
        <div className='relative  flex items-center justify-center  '>
            <img className='rounded-lg' src={MidBannerImg} alt="" />
            <div className='absolute   max-w-3xl bg-white p-8 text-center rounded-lg '>
                <h1 className='md:text-2xl'>Bistro Boss</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default MidBanner;