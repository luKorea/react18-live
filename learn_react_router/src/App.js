import React, {Fragment} from 'react';
import {Link, useRoutes} from "react-router-dom";
// import {Link, Route, Routes, Navigate} from "react-router-dom";
// import Home from "./page/Home";
// import About from "./page/About";
// import NotFound from "./page/NotFound";
// import HomeInfo from "./page/HomeInfo";
import HocRouter from "./page/HocRouter";
import routes from "./router";

export function App() {
    return (
        <Fragment>
            <div className='app'>
                <div className='header'>
                    <Link to='/home'>首页</Link>
                    <Link to='/about'>关于</Link>
                </div>
                <div className='content'>
                    {useRoutes(routes)}
                    {/*<Routes>*/}
                    {/*    <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>*/}
                    {/*    <Route path='/home' element={<Home/>}>*/}
                    {/*        <Route path='/home' element={<Navigate to={'/home/info'}></Navigate>}></Route>*/}
                    {/*        <Route path={'/home/info'} element={<HomeInfo/>}></Route>*/}
                    {/*    </Route>*/}
                    {/*    <Route path='/about' element={<About/>}></Route>*/}
                    {/*    <Route path='*' element={<NotFound/>}></Route>*/}
                    {/*</Routes>*/}
                </div>
                <div className='wrapper'>
                    <HocRouter></HocRouter>
                </div>
            </div>
        </Fragment>
    );
}

export default App;