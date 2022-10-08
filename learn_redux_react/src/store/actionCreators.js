// 通过action修改值
import {CHANGE_BANNER, CHANGE_TOKEN} from './constants'
import axios from "axios";
import {BASE_URL} from "../utils/url";

export const changeTokenAction = token => ({
    type: CHANGE_TOKEN,
    token
})
export const changeBannerAction = banner => ({
    type: CHANGE_BANNER,
    banner
})

// 使用redux-thunk中间件让dispatch返回一个函数
export const getBannerAction = () => {
    return (dispatch) => {
        axios.get(BASE_URL + '/home/multidata')
            .then(res => {
                const data = res?.data?.data?.banner?.list
                dispatch(changeBannerAction(data))
            })
    }
}
