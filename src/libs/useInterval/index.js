import { useRef, useEffect } from 'react'
function useInterval(callback, time = 300) {
    const intervalFn = useRef();
    useEffect(() => {
        intervalFn.current = callback;
    })
    useEffect(() => {
        const timer = setInterval(() => {
            intervalFn.current()
        }, time)
        return () => { clearInterval(timer) }
    }, [time])
}

export default useInterval