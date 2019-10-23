import { useState, useEffect } from 'react';
import requset from '../../api/request';
/**
 * 
 * @param {object} config 接口配置信息
 * @param {object} params 接口需要传递的参数
 * @param {array} watch 执行限制
 */
function useFetchHook(config, params = {}, watch = []) {
    const [result, setResult] = useState(null);
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const result = await requset({ ...config }, { ...params })
            if(result && result.code === 1){
                setResult(result)
                setData(result.data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchData()
    },watch?[...watch]:[])

    return { data, result }
}

export default useFetchHook