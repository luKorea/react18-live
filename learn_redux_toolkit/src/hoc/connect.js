// 实现connect
import {PureComponent} from "react";
import {StoreContext} from "./storeContext";

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrapperComponent) {
        class NewComponent extends PureComponent {
            constructor(props, context) {
                console.log(context, 'context')
                super(props);
                // 拿到mapStateToProps函数执行的返回值, 例如 {counter: state.counter.counter}
                this.state = mapStateToProps(context.getState())
            }

            // 监听store的变化
            componentDidMount() {
                this.unSubscribe = this.context.subscribe(() => {
                    this.setState(mapStateToProps(this.context.getState()))
                })
            }

            componentWillUnmount() {
                this.unSubscribe()
            }

            render() {
                const propsDispatch = mapDispatchToProps(this.context.dispatch);
                return <WrapperComponent {...this.props} {...propsDispatch} {...this.state} />
            }
        }

        NewComponent.contextType = StoreContext;
        return NewComponent;
    }
}