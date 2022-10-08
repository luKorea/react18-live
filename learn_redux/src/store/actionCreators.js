// 通过action修改值
const {CHANGE_TOKEN} = require("./constants");
const changeTokenAction = token => ({
    type: CHANGE_TOKEN,
    token
})


module.exports = {
    changeTokenAction
}