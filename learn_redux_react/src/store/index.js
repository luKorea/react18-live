import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import reducer from "./reducer";

// import LoginReducer from './login'
// import adminReducer from './admin'

//使用中间件完成异步数据操作
import thunk from "redux-thunk";

// 这里配置多模块
// const reducer = combineReducers({
//     loginModule: LoginReducer,
//     adminModule: adminReducer
// })


// 打开redux-devtool
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer,
    composeEnhancers(applyMiddleware(thunk))
)