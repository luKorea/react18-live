import About from "./components/About";
import store from "./store";
import {Fragment, PureComponent} from "react";
import {changeTokenAction} from "./store/actionCreators";

export class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            token: store.getState().token
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            store.getState()
            console.log('订阅数据更新', store.getState().token)
            this.setState({
                token: store.getState().token
            })
        })
    }

    changeData() {
        store.dispatch(changeTokenAction(Math.floor(Math.random() * 10)))
    }

    render() {
        return (
            <Fragment>
                <div>{this.state.token}</div>
                <button onClick={() => this.changeData()}>修改数据</button>
                <About/>
            </Fragment>
        )
    }
}

export default App;