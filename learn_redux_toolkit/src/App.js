import {Fragment, PureComponent} from "react";
import Home from "./pages/Home";
import {connect} from "react-redux";


export class App extends PureComponent {
    render() {
        return (
            <Fragment>
                首页中使用Store中的数据: {this.props.count}
                <Home/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    count: state.counter.count
})

export default connect(mapStateToProps)(App)
