import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100
    },
    reducers: {
        addNumber(state, {payload}) {
            state.count = state.count + payload
        },
        subNumber(state, {payload}) {
            state.count = state.count - payload
        }
    }
})

// 导出action
export const {addNumber, subNumber} = counterSlice.actions

export default counterSlice.reducer