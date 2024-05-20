import SectionTitle from '../../utils/SectionTitle';
import sideImg from './../../assets/home/banner.jpg'
import './../MidBanner/EndStyle.css'
import { Button } from 'flowbite-react';

const EndBanner = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}

            ></SectionTitle>
            <div className='bg-cover bg-fixed  '>
                <div className='max-w-4xl  mx-auto text-center space-y-4'>
                    <div className='flex gap-2 py-20 '>
                        <div className=''>
                            <img className='w-full rounded-lg object-cover' src={sideImg} alt="" />
                        </div>
                        <div className=' text-white flex flex-col gap-4'>
                            <p className=' font-medium '>Date: March 20, 2023 <br />
                                WHERE CAN I GET SOME?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <Button className='w-fit mx-auto' >Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EndBanner;