const root = ReactDOM.createRoot(document.querySelector('#root'))


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Map数组展示',
      movie: ['demo', 'info', 'page', 'hh'],
      isActive: true
    }
  }
  handleChangeMessage = () => {
    this.setState({
      message: 'Hello React',
    })
  }
  render() {
    const {message, movie, isActive} = this.state
    // 动态绑定类名
    const className = `text btn ${isActive && 'active'}`
    return (
      <div>
       <h1>{message}</h1>
        <ul>
          {
            movie.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
       {/* class绑定 */}
       <button className={className} onClick={() => this.handleChangeMessage()}>点击切换内容</button>
      </div>
    )
  }
}


root.render(<App/>)