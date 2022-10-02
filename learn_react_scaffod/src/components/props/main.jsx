import React, { Component } from "react";
import Banner from "./banner";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bannerList: [],
    };
  }
  getData() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      this.setState({
        bannerList: res.data.data.banner.list,
      });
    });
  }
  componentDidMount() {
    this.getData();
  }
  // 处理子组件传递过来的数据, 修改父组件中的值
  removeData(acm) {
    const newList = [...this.state.bannerList];
    const index = newList.findIndex((i) => i.acm === acm);
    newList.splice(index, 1);
    this.setState({
      bannerList: newList,
    });
  }
  render() {
    return (
      <div>
        {/* 父组件传值给子组件 */}
        <Banner
          bannerList={this.state.bannerList}
          parentRemoveData={(e) => this.removeData(e)}
        />
      </div>
    );
  }
}

export default Main;
