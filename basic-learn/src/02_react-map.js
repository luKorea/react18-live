const root = ReactDOM.createRoot(document.querySelector('#root'))


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Map数组展示',
      movie: ['demo', 'info', 'page', 'hh'],
    }
  }
  handleChangeMessage = () => {
    this.setState({
      message: 'Hello React',
    })
  }
  render() {
    const {message, movie} = this.state
    return (
      <div>
       <h1>{message}</h1>
        <ul>
          {
            movie.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}


root.render(<App/>)