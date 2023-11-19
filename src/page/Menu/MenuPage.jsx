import { Helmet } from 'react-helmet-async';
import HeroMenu from '../../Component/Hero/HeroMenu';
import useMenuData from '../../hooks/useMenuData';
import MenuBox from '../../Component/MenuSection/MenuBox';
import SectionTitle from '../../utils/SectionTitle';



const MenuPage = () => {
    const [menu] = useMenuData();

    const pizza = menu.filter(data => data.category === "pizza")
    const salad = menu.filter(data => data.category === "salad")
    const dessert = menu.filter(data => data.category === "dessert")
    const soup = menu.filter(data => data.category === "soup")


    return (
        <div>
            <Helmet>
                <title>Pizz hut | Menu</title>
            </Helmet>
            <HeroMenu></HeroMenu>
            <section className='space-y-10'>
                <section>
                    <SectionTitle
                        subHeading={"Todays Best"}
                        heading={"Pizza"}>
                    </SectionTitle>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                        {
                            pizza.map(pizza => <MenuBox key={pizza._id} data={pizza} ></MenuBox>)
                        }
                    </div>
                </section>
                <section>
                    <SectionTitle
                        subHeading={"Todays Best"}
                        heading={"Salad"}>
                    </SectionTitle>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                        {
                            salad.map(items => <MenuBox key={items._id} data={items} ></MenuBox>)
                        }
                    </div>
                </section>
                <section>
                    <SectionTitle
                        subHeading={"Todays Best"}
                        heading={"Dessert"}>
                    </SectionTitle>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                        {
                            dessert.map(items => <MenuBox key={items._id} data={items} ></MenuBox>)
                        }
                    </div>
                </section>
                <section>
                    <SectionTitle
                        subHeading={"Todays Best"}
                        heading={"Soup"}>
                    </SectionTitle>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto'>
                        {
                            soup.map(items => <MenuBox key={items._id} data={items} ></MenuBox>)
                        }
                    </div>
                </section>
            </section>
        </div>
    );
};

export default MenuPage;