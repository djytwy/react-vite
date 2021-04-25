/**
 * @Author: djytwy
 * @Date:   2021-04-23 16:21:30
 * @Last Modified by:   djytwy
 * @Last Modified time: 2021-04-25 17:43:50
 */
import { action, computed, makeAutoObservable } from 'mobx';
import { eleInterface } from './eleInterface';

const mixinArr = ['Ia', 'Ib', 'Ic']
const mixinVol = ['Ua','Ub','Uc']

const mixinEle : Array<eleInterface> = mixinArr.map(e => ({
    name: e,
    value: '123',
    unit: 'A'
}))

const mixinVols : Array<eleInterface> = mixinVol.map(e => ({
    name: e,
    value: '233',
    unit: 'V'
}))

class EletricRoomState {
    // 左侧高压侧
    public heighVolte: Array<eleInterface> = [{
        name: 'P',
        value: '0.00',
        unit: 'KW'
    },{
        name: 'Q',
        value: '0.00',
        unit: 'KVar'
    },
    ...mixinEle]
    // 低压侧左
    public lowVoltel: Array<eleInterface> = [{
            name: 'P',
            value: '0.00',
            unit: 'KW'
        },{
            name: 'Q',
            value: '0.00',
            unit: 'KVar'
        },{
            name: 'Cos',
            value: '0.90',
            unit: ''
        },
        ...mixinVols
    ]
    // 低压侧右
    public lowVolter: Array<eleInterface> = mixinEle

    // 0.4KV母线 初始化225
    public KV04 : Array<any> = Array.from(Array(5), (v, i) => 225)

    // 环境状态-温度
    public envStatusTem: number = 36.8
    // 环境状态-湿度
    public envStatusWet: number = 56
    
    constructor () {
        makeAutoObservable(this)
    }

}

// const eletricRoom = new EletricRoom()

export const eletricRoomState = new EletricRoomState()