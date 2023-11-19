import { Card, Badge } from 'flowbite-react';


const MenuBox = ({ data }) => {

    return (

        <Card horizontal>
            <div className='flex items-center  w-full gap-2'>
                <div className='w-1/4 ' >
                    <img className='rounded' src={data.image} alt="" />
                </div>
                <div className='w-9/12 p-1 space-y-1 '>
                    <h1 className='text-xl font-semibold'>{data.name}</h1>
                    <p>{data.recipe}</p>
                    <Badge className='w-fit' color="success" size="sm">
                        {data.category}
                    </Badge>

                    <p className='text-lg font-bold'>{data.price} ⭐</p>
                </div>
            </div>

        </Card>


    );
};

export default MenuBox;