import { Button } from "flowbite-react";
import { NavLink, Outlet } from "react-router-dom";


const AdminPanel = () => {
    return (
        <div className="flex min-h-screen">
            <div className="bg-gray-400 w-1/4 flex flex-col gap-4 px-10">
                <div>
                    <h1 className="text-2xl">PIzza Hut</h1>
                    <p>Admin Panel</p>
                    <div className="border-b-2"></div>
                </div>
                <Button className="w-full"><NavLink to={'dash'} >DashBoard</NavLink> </Button>
                <Button className="w-full"><NavLink to={'/menu'} >Home</NavLink> </Button>
                <Button className="w-full"><NavLink to={'cart'} >Cart</NavLink> </Button>
                <Button className="w-full"><NavLink to={'add_food'} >AddFood </NavLink></Button>
                <Button className="w-full"><NavLink to={'add_user'} >Add Agent User </NavLink></Button>
                <Button className="w-full"><NavLink to={'admin/dash'} >Setting</NavLink> </Button>
            </div>
            <div className="flex-1 p-6 mt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPanel;