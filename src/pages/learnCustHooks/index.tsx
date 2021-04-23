import { useTest } from './custHooks';
import React, { useEffect } from 'react';
import Hook1 from '../../components/Hook1';
import { airSystemInformation } from '../../api/demo';
import { myTimer, Timer } from './mobxLib';
import { observer } from 'mobx-react';

function showHooks() {
    const {num, useSetNum} = useTest('自定义的测试')

    useEffect(() => {
        initData()
        setInterval(() => {
            myTimer.increase()
        },1000)
    })

    const initData = async () => {
        const data = await airSystemInformation()
        console.log(data.heating)
    }

    const MobxData = observer((props: any) => {
        const { timer } = props
        const test : Array<string> = ['2'] 
        return (
            <div>Mobx数据： {timer.seconds}</div>
        )
    })

    return (
        <div>
            <MobxData timer={myTimer} />
            <br/>
            这是一个自定义的hooks: { num }
            <span>
                <button onClick={() => useSetNum()}>测试按钮</button>
            </span>
            
            <Hook1 name='twy'/>
        </div>
    )
}

export default showHooks