// 通过action修改值
import {GET_USER_INFO} from './constants'

export const changeInfoAction = token => ({
    type: GET_USER_INFO,
    token
})