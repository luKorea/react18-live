// toolkit中异步数据请求
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

// createAsyncThunk创建异步请求
/*
  1. 方式一: 返回异步请求获取到的数据,在extraReducers对象中使用计算属性监听createAsyncThunk的变化
  2. 方式二: 返回异步请求获取到的数据,在extraReducers函数中使用addCase监听createAsyncThunk变化的状态
  3. 方式三: 直接在createAsyncThunk回调函数中直接dispatch
 */


export const fetchHomeBannerListAction = createAsyncThunk('home/multidata', async (state, store) => {
  console.log(state, store);
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  // 方式三
  store.dispatch(setBannerList(res.data.data.banner.list))
  return res.data;
})

const homeReducer = createSlice({
  name: 'home',
  initialState: {
    bannerList: []
  },
  reducers: {
    setBannerList(state, {payload}) {
      state.bannerList = payload
    }
  },
  // 方式一
  // extraReducers: {
  //   [fetchHomeBannerListAction.pending](state) {
  //     console.log('pending', state)
  //   },
  //   [fetchHomeBannerListAction.fulfilled](state, {payload}) {
  //     console.log('fulfilled', state, payload);
  //     state.bannerList = payload.data.banner.list
  //   },
  //   [fetchHomeBannerListAction.rejected](err) {
  //     console.log('reject', err)
  //   }
  // }
  // 方式二
  // extraReducers: builder => {
  //   builder.addCase(fetchHomeBannerListAction.fulfilled, (state, {payload}) => {
  //     console.log(state, payload);
  //     state.bannerList = payload.data.banner.list
  //   })
  // }
})


export const { setBannerList } = homeReducer.actions

export default homeReducer.reducer