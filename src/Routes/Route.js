import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Blog from "../Components/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
])