import {configureStore} from '@reduxjs/toolkit'
import homeReducer from "./module/home";
import counterReducer from './module/counter'

const store = configureStore({
    reducer: {
        home: homeReducer,
        counter: counterReducer
    }
})

export default store