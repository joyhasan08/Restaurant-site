
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import MenuPage from "../page/Menu/MenuPage";
import LoginOutlet from "../layout/Login/LoginOutlet";
import SingIn from "../page/LoginPage/SingIn";
import SingUp from "../page/LoginPage/SingUp";
import AdminPanel from "../layout/Admin/AdminPanel";
import DashBoard from "../page/Admin/DashBoard";
import CartPanel from "../page/Admin/CartPanel";
import AddFood from "../Component/AddFood/AddFood";
import AddUser from "../Component/AddUser/AddUser";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: 'menu',
                element: <MenuPage />

            }
        ]
    },
    {
        path: 'login',
        element: <LoginOutlet />,
        children: [
            {
                path: 'login',
                element: <SingIn />
            },
            {
                path: 'reg',
                element: <SingUp />
            }
        ]
    },
    {
        path: 'admin',
        element: <AdminPanel />,
        children: [
            {
                path: 'dash',
                element: <DashBoard />
            },
            {
                path: 'cart',
                element: <CartPanel />
            },
            {
                path: 'add_food',
                element: <AddFood />
            },
            {
                path: 'add_user',
                element: <AddUser />
            }
        ]
    }
])

export default router;