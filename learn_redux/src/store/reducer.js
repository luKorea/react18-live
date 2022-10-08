// 初始化数据
const {CHANGE_TOKEN} = require("./constants");
const defaultState = {
    userInfo: {
        name: 'korea',
        age: 22
    },
    token: null
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOKEN:
            return {...state, token: action.token}
        default:
            return state
    }
}

module.exports = {reducer}