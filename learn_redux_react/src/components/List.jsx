import React, {Component} from 'react';
import {connect} from "react-redux";
import {getBannerAction} from "../store/actionCreators";

class List extends Component {
    componentDidMount() {
        this.props.getBanner()
    }

    render() {
        const {banner} = this.props;
        return (
            <div>
                列表数据展示, 异步获取
                {
                    banner.map(item => {
                        return (
                            <li key={item.acm}>{item.title}</li>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    banner: state.banner
})
const mapDispatchToProps = dispatch => ({
    getBanner() {
        dispatch(getBannerAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)