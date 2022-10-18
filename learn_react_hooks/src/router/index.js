import Home from "../page/Home"
import { Navigate } from 'react-router-dom'
import React from "react"

const About = React.lazy(() => import('../page/About'))

const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About/>
    }
]

export default routes