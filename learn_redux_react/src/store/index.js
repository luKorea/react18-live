import {applyMiddleware, createStore, compose} from 'redux'
import reducer from "./reducer";
//使用中间件完成异步数据操作
import thunk from "redux-thunk";


// 打开redux-devtool
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
)