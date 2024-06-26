import { Button } from "flowbite-react";
import { NavLink, Outlet } from "react-router-dom";


const AdminPanel = () => {
    const navBtnCls = 'w-full  bg-white  text-black cursor-pointer uppercase font-mono  font-bold py-2 px-4 rounded border-2 border-black shadow-[0.25rem_0.25rem_#121212] transition-[transform_50ms, box-shadow_50ms] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0.125rem_0.125rem_#121212]'

    return (
        <div className="flex min-h-screen min-w-full">
            <div className="bg-slate-200 w-1/4 flex flex-col gap-4 px-10 shadow-[0.125rem_0.125rem_#121212]">
                <div>
                    <h1 className="text-3xl font-mono text-gray-600 font-semibold pt-4">PIzza Hut</h1>
                    <p className="text-gray-700 font-mono text-lg pb-4">Admin Panel</p>
                    <div className="border-b-2  border-black"></div>
                </div>
                <NavLink to={'dash'} className={navBtnCls} >DashBoard</NavLink>
                <NavLink to={'/menu'} className={navBtnCls} >Home</NavLink>
                <NavLink to={'cart'} className={navBtnCls}  >Cart</NavLink>
                <NavLink to={'add_food'} className={navBtnCls}  >Add Food </NavLink>
                <NavLink to={'add_user'} className={navBtnCls}  >Add Delivery Man  </NavLink>
                <NavLink to={'admin/dash'} className={navBtnCls}  >Setting</NavLink>
            </div>
            <div className="w-3/4  p-6 mt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminPanel;