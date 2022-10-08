import {PureComponent} from "react";
import {connect} from 'react-redux'
import {changeTokenAction} from "./store/actionCreators";
import About from "./components/About";
import List from "./components/List";

export class App extends PureComponent {
    changeData() {
        this.props.changeData(Math.floor(Math.random() * 10))
    }

    render() {
        return (
            <div>
                <div>{this.props.token}</div>
                <button onClick={() => this.changeData()}>修改数据</button>
                <About/>
                <List/>
            </div>
        )
    }
}

// 将redux的数据映射到组件的props中
const mapStateToProps = state => ({
    token: state.token
})
// 将dispatch 映射到组件的props中
const mapDispatchToProps = dispatch => ({
    changeData(token) {
        dispatch(changeTokenAction(token))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)