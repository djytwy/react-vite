import { useState, useEffect  } from 'react';

export function useTest (code: string) {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    useEffect(() => {
       function test(code:string) {
           console.log(code);
       }
       test(code)
       console.log('测试一下自定义hooks！');
    },[num2])

    const useSetNum = () => {
        const _v = Math.random() * 10000
        setNum(_v)
    }

    return {num, useSetNum};
}