import React, {Component} from 'react';
import {connect} from "../hoc/connect";
import {addNumber, subNumber} from "../store/module/counter";

class About extends Component {
    render() {
        return (
            <div>
                封装connect中拿到store中的值{this.props.count}
                <button onClick={() => this.props.addNumber(10)}>+10</button>
                <button onClick={() => this.props.subNumber(10)}>-10</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    count: state.counter.count
})
const mapDispatchToProps = dispatch => ({
    addNumber(num) {
        dispatch(addNumber(num))
    },
    subNumber(num) {
        dispatch(subNumber(num))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(About)