
import menuImg from './../../assets/menu/banner3.jpg'
import KeepCarousel from "../Carousel/KeepCarousel";
import SearchBarComponent from "../SearchBar/SearchBarComponent";
import "./../MidBanner/EndStyle.css"



const HeroMenu = () => {
    return (
        <div>
            <section>
                <div className="dark:bg-violet-400 bg-cover bg-fixed pt-4 mb-4 rounded-b-lg">
                    <div className="container flex flex-col items-center text-white   px-4 py-16 pb-24 mx-auto text-center lg:pb-20 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold  sm:text-6xl xl:max-w-3xl dark:text-gray-900">OUR MENU</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto !</p>
                        <div className="flex flex-wrap justify-center items-center">
                            <SearchBarComponent></SearchBarComponent>

                        </div>
                    </div>
                </div>
                <div className='mx-2'>
                    <KeepCarousel></KeepCarousel>
                </div>
            </section>
            {/* src="https://source.unsplash.com/random/480x320"  */}
        </div>
    );
};

export default HeroMenu;