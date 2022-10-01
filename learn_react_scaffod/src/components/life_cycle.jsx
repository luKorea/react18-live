import React, {Component} from 'react';

class LifeCycle extends Component {

    //生命周期函数
    /**
     * @description 组件执行流程
     * 1. 先执行构造函数
     * 2. 再执行render函数
     * 3. 再执行componentDidMount
     * 4. 更新时执行
     * 5, 卸载组件
     */
    constructor() {
        super();
        this.state = {
            message: '组件生命周期函数'
        }
        console.log('执行constructor')
    }
    // 挂载
    componentDidMount() {
        console.log('执行componentDidMount')
    }
    // 更新
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('执行componentDidUpdate')
        console.log(snapshot, '更新之前设置的数据')
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {
            prevProps,
            prevState
        }
    }

    // 卸载
    componentWillUnmount() {
        console.log('执行componentWillUnmount')
    }
    changeData() {
        this.setState({
            message: '更新组件状态'
        })
    }
    render() {
        console.log('执行render')
        return (
            <div>
                <button onClick={() => this.changeData()}>更新组件状态</button>
                {this.state.message}
            </div>
        );
    }
}

export default LifeCycle;