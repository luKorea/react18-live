import React from "react";
import {Navigate} from "react-router-dom";
import Home from "../page/Home";
// import About from "../page/About";
import NotFound from "../page/NotFound";
import HomeInfo from "../page/HomeInfo";

// 路由懒加载, 需要配合Suspense 使用
const About = React.lazy(() => import('../page/About'))

const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'}></Navigate>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: '/home',
                element: <Navigate to={'/home/info'}></Navigate>,
            },
            {
                path: '/home/info',
                element: <HomeInfo/>
            }
        ]
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFound/>
    },
]

export default routes