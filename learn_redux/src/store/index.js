const {createStore} = require('redux');
const {reducer} = require("./reducer");
// store 中的值只能在reducer中修改, 通过dispatch触发action

module.exports = createStore(reducer)