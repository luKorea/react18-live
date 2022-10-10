import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './module/counter'

console.log(process.env.NODE_ENV, 'NODE_ENV')

const store = configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: {
        counter: counterReducer
    }
})

export default store