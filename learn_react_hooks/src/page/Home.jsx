import { useEffect, useState } from "react"

function Home(props) {
    const [count,setCount] = useState(100)
    useEffect(() => {
        console.log('Effect使用');
    })
    useEffect(() => {
        console.log('bus开始监听');
        return () => {
            console.log('取消监听');
        }
    })
    useEffect(() => {
        console.log('第二个参数传入空数组, 该Effect只会执行一次');
    }, [])
    useEffect(() => {
        console.log('count改变才会执行', count);
    }, [count])
    return (
        <div>
            useState使用: {count}
            <button onClick={() => setCount(count + 1)}>修改state</button>
        </div>
    )
}

export default Home