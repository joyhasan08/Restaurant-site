import { useEffect, useState } from "react";
import SectionTitle from "../../utils/SectionTitle";

import MenuCard from "./MenuCard";

const MenuSection = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const popular = data.filter((data) => data.category === "popular")
                console.log(popular);
                setMenu(popular)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"check it Out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto h-[1000px] p-4 overflow-auto" >
                {
                    menu.map(data => <MenuCard key={data._id} menu={data} ></MenuCard>)
                }
            </div>
        </section>
    );
};

export default MenuSection;