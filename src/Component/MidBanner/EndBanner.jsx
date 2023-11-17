import SectionTitle from '../../utils/SectionTitle';
import BannerBg from './../../assets/home/featured.jpg'
import sideImg from './../../assets/home/banner.jpg'
import './../MidBanner/EndStyle.css'

const EndBanner = () => {
    return (
        <div className='bg-cover   h-[500px]'>
            <div className='max-w-4xl  mx-auto text-center space-y-4'>
                <SectionTitle
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}

                ></SectionTitle>
                <div className='flex gap-2 '>
                    <div className=''>
                        <img className='w-full rounded-lg object-cover' src={sideImg} alt="" />
                    </div>
                    <div className='text-gray-200'>
                        <p className='text-lg text-center'>March 20, 2023
                            WHERE CAN I GET SOME?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className='bg-slate-500 p-2 rounded-lg my-4'>READ MORE</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EndBanner;