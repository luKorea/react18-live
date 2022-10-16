import React, {PureComponent} from 'react';
import {withRouter} from "../hoc/HocComponent";

class HocRouter extends PureComponent {
    navigateTo() {
        this.props.router.navigate('/about')
    }

    render() {
        console.log(this.props, 'props')
        return (
            <div>
                高阶组件中使用手动路由跳转
                <button onClick={() => this.navigateTo()}>点击跳转</button>
            </div>
        );
    }
}

export default withRouter(HocRouter)