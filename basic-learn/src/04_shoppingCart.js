const root = ReactDOM.createRoot(document.querySelector('#root'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataList: dataList,
      fieldList: fieldList,
      dataLength: fieldList.length
    }
  }
  renderTable() {
    const { dataList, fieldList, dataLength } = this.state
    return (
      <div className='wrap'>
      <table>
        <thead>
          <tr>
            {
              fieldList.map((item, index) => <th key={index}>{item.name}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            dataList.length === 0 ? this.renderEmpty() : dataList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{formatPrice(item.price, '¥')}</td>
                  <td>
                    <button className='m' 
                      disabled={item.count <= 0} 
                      onClick={() => this.changeCount(index, -1)}
                    >-</button>
                    {item.count}
                    <button className='m' onClick={() => this.changeCount(index, 1)}>+</button>
                  </td>
                  <td><button onClick={() => this.removeItem(index)}>删除</button></td>
                </tr>
              )
            })
          }
          {
            dataList.length ?
              (<tr className="col">
                <td>总价格</td>
                <td colSpan={dataLength - 1} className='price'>
                  {formatPrice(this.reducePrice(), '¥')}
                </td>
              </tr>
              )
              : ''
          }
        </tbody>
      </table>
      </div>
    )
  }
  renderEmpty() {
    return <tr>
      <td colSpan={this.state.dataLength}>暂无数据</td>
    </tr>
  }
  reducePrice() {
    return this.state.dataList.reduce((preValue, item) => {
      return preValue + item.price * item.count
    }, 0)
  }
  removeItem(index) {
    let newList = [...this.state.dataList]
    newList.splice(index, 1)
    this.setState({
      dataList: newList
    })
  }
  changeCount(index, count) {
    const newList = [...this.state.dataList]
    newList[index].count += count
    this.setState({
      dataList: newList
    })
  }
  render() {
    return this.renderTable()
  }
}


root.render(<App />)