const root = ReactDOM.createRoot(document.querySelector('#root'))

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello Word'
    }
  }
  handleChangeMessage = () => {
    this.setState({
      message: 'Hello React'
    })
  }
  render() {
    const {message} = this.state
    return (
      <div>
       <h1>{message}</h1>
       <button onClick={() => this.handleChangeMessage()}>点击切换内容</button>
      </div>
    )
  }
}


root.render(<App/>)