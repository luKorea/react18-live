import { useEffect, useState } from "react";


function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key);
    if (!item) return ''
    return JSON.parse(item)
  })

  useEffect(() => {
    if(data) {
      localStorage.setItem(key, JSON.stringify(data))
    }
  }, [data, key])
  return [data, setData]
}
export default useLocalStorage