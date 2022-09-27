const root = ReactDOM.createRoot(document.querySelector('#root'))

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: 'korea'
            }
        }
    }

    render() {
        return (
            <div>
                {/* JSX注释写法 */}
                <span>三大基础</span>
                {/*对象类型不能作为子元素展示*/}
            </div>
        )
    }
}

root.render(<App/>)
