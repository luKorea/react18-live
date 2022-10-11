import React, {Component} from 'react';
import {connect} from "react-redux";
import {addNumber, subNumber} from "../store/module/counter";
import { fetchHomeBannerListAction } from '../store/module/home';

class Home extends Component {
    componentDidMount() {
        this.props.fetchHomeBannerData()
    }
    render() {
        return (
            <div>
                组件中使用store: {this.props.count}
                <button onClick={() => this.props.handleAddNumber(10)}>+10</button>
                <button onClick={() => this.props.handleSubNumber(10)}>-10</button>
                <div>异步获取数据</div>
                {
                    this.props.bannerList.map(item => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counter.count,
    bannerList: state.home.bannerList
})

const mapDispatchToProps = dispatch => ({
    handleAddNumber(num) {
        dispatch(addNumber(num))
    },
    handleSubNumber(num) {
        dispatch(subNumber(num))
    },
    fetchHomeBannerData() {
        dispatch(fetchHomeBannerListAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)