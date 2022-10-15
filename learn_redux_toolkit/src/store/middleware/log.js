function log(store) {
    const next = store.dispatch

    function dispatchAndLog(action) {
        console.log('dispatch start', action)
        next(action)
        console.log('dispatch end', store.getState())
    }

    store.dispatch = dispatchAndLog
}

export default log