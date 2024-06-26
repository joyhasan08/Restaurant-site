import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from "./../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';

const NavBarPraimary = () => {
    return (
        <>
            <div className=' fixed max-w-screen-2xl w-full z-10 mt-4 px-4  '>
                <Navbar fluid rounded className=' bg-slate-200   '>
                    <Navbar.Brand className='flex  items-center gap-4'>
                        <img className='w-12' src={logo} alt="" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pizza Hut</span>
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">Mashum Billah</span>
                                <span className="block truncate text-sm font-medium">Masum231@Gmail.com</span>
                            </Dropdown.Header>
                            <NavLink to={'/admin/dash'}>  <Dropdown.Item>Dashboard</Dropdown.Item></NavLink>
                            {/* <Dropdown.Item>Settings</Dropdown.Item> */}
                            {/* <Dropdown.Item>Earnings</Dropdown.Item> */}
                            <Dropdown.Divider />
                            {/* <Dropdown.Item>Sign out</Dropdown.Item> */}
                            <Button className=' w-full rounded-none  ' > <NavLink to={"admin/dash"}>Admin Panel </NavLink></Button>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>

                        <Link to={'/'} >Home</Link>
                        <Link to={'/menu'} >Menu</Link>
                        <Navbar.Link href="#">Services</Navbar.Link>
                        <Navbar.Link href="#">Pricing</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default NavBarPraimary;