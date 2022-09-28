const root = ReactDOM.createRoot(document.querySelector('#root'))

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                name: 'korea'
            },
            isActive: true
        }
    }

    render() {
        const {isActive} = this.state
        // 动态绑定类名
        const className = `text btn ${isActive && 'active'}`
        return (
            <div>
                {/* JSX注释写法 */}
                <span>三大基础</span>
                {/*对象类型不能作为子元素展示*/}
                {/* class绑定, classnames */}
                <button className={className} onClick={() => this.handleChangeMessage()}>点击切换内容</button>
                 {/* style绑定 */}
                 <div style={{color: 'red', backgroundColor: '#008c8c'}}></div>
            </div>
        )
    }
}

root.render(<App/>)
