import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Banner extends Component {
  removeData(index) {
    this.props.parentRemoveData(index)
  }
  render() {
    const {bannerList} = this.props;
    console.log(bannerList)
    return (
      <div>
        {
          bannerList.map((item, index) => {
            return (
              <div key={item.acm}>
                {item.title}
                <button onClick={() => this.removeData(item.acm)}>子组件删除父组件的数据</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

// 配置类型校验
Banner.propTypes = {
  bannerList: PropTypes.array.isRequired
}
// 配置默认值
Banner.defaultProps = {
  title: '这是配置默认值'
}
 
export default Banner;