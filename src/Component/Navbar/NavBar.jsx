import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from "./../../assets/logo.png"

const NavBar = () => {
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
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active>
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="#">About</Navbar.Link>
                        <Navbar.Link href="#">Services</Navbar.Link>
                        <Navbar.Link href="#">Pricing</Navbar.Link>
                        <Navbar.Link href="#">Contact</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    );
};

export default NavBar;