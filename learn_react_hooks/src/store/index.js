import {configureStore} from '@reduxjs/toolkit'
import homeReducer from "./module/home";

const store = configureStore({
    reducer: {
        home: homeReducer
    }
})

export default store