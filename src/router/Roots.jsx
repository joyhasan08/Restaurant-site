
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";


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
                path: 'contact'

            }
        ]
    },
])

export default router;