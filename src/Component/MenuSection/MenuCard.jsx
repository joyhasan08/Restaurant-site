import { Button } from 'flowbite-react';

const MenuCard = ({ menu }) => {

    return (
        <div className="flex gap-4 items-center bg-slate-200 rounded-xl">
            <div className="p-2 space-y-4">
                {/* <img src={menu.image} alt="" /> */}
                <h1 className="text-2xl font-medium" >{menu.name}</h1>
                <p>{menu.recipe}</p>
                <Button pill gradientDuoTone="purpleToPink" >
                    See More
                </Button>


            </div>
            <div>
                <h1 className="text-xl flex items-center justify-center font-semibold p-2">{menu.price} ⭐</h1>
            </div>
        </div>
    );
};

export default MenuCard;