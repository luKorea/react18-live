import {createSlice} from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
   reducers: {
     addNum(state, {payload}) {
      console.log(state.count, payload)
      state.count = state.count + payload
     }
   }
})

export const { addNum } = counter.actions

export default counter.reducer