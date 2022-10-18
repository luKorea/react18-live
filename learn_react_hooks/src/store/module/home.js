import {createSlice} from '@reduxjs/toolkit'

const home = createSlice({
    name: 'home',
    initialState: {
        userInfo: {}
    },
    reducers: {
        setUserInfo(state, {payload}) {
            state.userInfo = payload
        }
    }
})

export const {setUserInfo} = home.actions

export default home.reducer