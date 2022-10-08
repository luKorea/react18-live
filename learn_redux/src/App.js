const store = require('./store')
const {changeTokenAction} = require("./store/actionCreators");

store.subscribe(() => {
    console.log('订阅数据更新', store.getState());
})


store.dispatch(changeTokenAction('465464646'))