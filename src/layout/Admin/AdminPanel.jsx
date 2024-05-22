import { Button } from "flowbite-react";
import { NavLink, Outlet } from "react-router-dom";


const AdminPanel = () => {
    const navBtnCls = 'w-full  bg-white hover:text-white text-black cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    return (
        <div className="flex min-h-screen min-w-full">
            <div className="bg-slate-200 w-1/4 flex flex-col gap-4 px-10">
                <div>
                    <h1 className="text-3xl font-mono text-gray-600 font-semibold">PIzza Hut</h1>
                    <p className="text-gray-700 font-mono text-lg pb-4">Admin Panel</p>
                    <div className="border-b-2  border-black"></div>
                </div>
                <Button className={navBtnCls}><NavLink to={'dash'} >DashBoard</NavLink> </Button>
                <Button className={navBtnCls}><NavLink to={'/menu'} >Home</NavLink> </Button>
                <Button className={navBtnCls}><NavLink to={'cart'} >Cart</NavLink> </Button>
                <Button className={navBtnCls}><NavLink to={'add_food'} >AddFood </NavLink></Button>
                <Button className={navBtnCls}><NavLink to={'add_user'} >Add Agent User </NavLink></Button>
                <Button className={navBtnCls}><NavLink to={'admin/dash'} >Setting</NavLink> </Button>
            </div>
            <div className="w-3/4  p-6 mt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPanel;