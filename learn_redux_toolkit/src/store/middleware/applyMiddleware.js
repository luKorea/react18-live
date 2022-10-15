function applyMiddleware(store, fns) {
    if (!Array.isArray(fns)) {
        throw new Error(`第二个参数必须是一个数组`)
    } else {
        for (const fn of fns) {
            fn(store)
        }
    }
}

export default applyMiddleware