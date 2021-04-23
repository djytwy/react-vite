import React from 'react';
import { user } from '../../store/user';
import { inject, observer, useLocalObservable } from 'mobx-react';

// interface MobxProps {
//   store: User
// }

interface interfaceUser {
    name: string,
    age: number
}

// @inject("user") // 将user注入  mobx使用类的方式
// @observer
// class LearnMobx extends React.Component<MobxProps, {}> {

// }

function LearnMobx({name, age}: interfaceUser) {
//    const localStore = useLocalObservable(() => user);
    const {num,addNum} = user;
    const _add = () => {
        user.addOne()
    }
    return (
        <div>
            <span>有个帅逼：{name}, 年龄：{age}</span><br />
            <span>Mobx的数据：{num}</span><br />
            <span>Mobx的数据2：{addNum}</span><br />
            <button onClick={_add}>加一</button>
        </div>
    )
    // return (
    //     <div></div>
    // )
}

export default observer(LearnMobx)

