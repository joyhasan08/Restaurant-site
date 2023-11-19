
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import MenuPage from "../page/Home/Menu/MenuPage";


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
])

export default router;