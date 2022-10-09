// 初始化数据
import {CHANGE_BANNER, CHANGE_TOKEN} from "./constants";

const defaultState = {
    userInfo: {
        name: 'korea',
        age: 22
    },
    token: '这是默认值',
    banner: [],
    recommend: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOKEN:
            return {...state, token: action.token}
        case CHANGE_BANNER:
            return {...state, banner: action.banner}
        default:
            return state
    }
}

export default reducer