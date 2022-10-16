import React, {PureComponent} from 'react';
import {Link, Outlet} from "react-router-dom";

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <div>Home</div>
                <Link to={'/home/info'}>系列</Link>
                <Outlet/>
            </div>
        );
    }
}

export default Home;