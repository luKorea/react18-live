import React, {Component} from 'react';
import {connect} from "react-redux";
import {addNumber, subNumber} from "../store/module/counter";

class Home extends Component {
    render() {
        return (
            <div>
                组件中使用store: {this.props.count}
                <button onClick={() => this.props.handleAddNumber(10)}>+10</button>
                <button onClick={() => this.props.handleSubNumber(10)}>-10</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
    handleAddNumber(num) {
        dispatch(addNumber(num))
    },
    handleSubNumber(num) {
        dispatch(subNumber(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)