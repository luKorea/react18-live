import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './module/counter'
import homeReducer from './module/home';
import {applyMiddleware, log, thunk} from './middleware'

console.log(process.env.NODE_ENV, 'NODE_ENV')

const store = configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: {
        counter: counterReducer,
        home: homeReducer
    },
})


applyMiddleware(store, [log, thunk])
// applyMiddleware(store, log)
export default store