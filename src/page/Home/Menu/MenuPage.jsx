import { Helmet } from 'react-helmet-async';
import HeroMenu from '../../../Component/Hero/HeroMenu';

const MenuPage = () => {
    return (
        <div>
            <Helmet>
                <title>Pizz hut | Menu</title>
            </Helmet>
            <HeroMenu></HeroMenu>

        </div>
    );
};

export default MenuPage;