import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './module/counter'
import homeReducer from './module/home';

console.log(process.env.NODE_ENV, 'NODE_ENV')

const store = configureStore({
    devTools: process.env.NODE_ENV === 'development',
    reducer: {
        counter: counterReducer,
        home: homeReducer
    }
})

export default store