import * as React from 'react';
import './index.css'
import bg from './bg.png'
import { VanA, VandD, Mixin }  from './components/_VandA/VandA'
import PicExp from './components/picExp';
import EnvStatus from './components/envStatus';
import { eletricRoomState } from '../../store/eletricRoom'
import { observer } from 'mobx-react';
import { eleInterface } from '../../store/eletricRoom/eleInterface'

const KV04List : React.FC<any> = () => {
    return (
        <span>
            <div style={{ color: 'rgba(232,150,73,1)',display: 'flex', position: 'absolute', fontSize: 14, top: 500, left: '36.5%' }}>
                { eletricRoomState.KV04.map((e,i) => 
                    <div key={i} style={{ marginRight: 22 }}>{e}A</div>
                )}
            </div>
            <div style={{ color: 'rgba(232,150,73,1)',display: 'flex', position: 'absolute', fontSize: 14, top: 500, left: '51%' }}>
                { eletricRoomState.KV04.map((e,i) => 
                    <div key={i} style={{ marginRight: 22 }}>{e}A</div>
                )}
            </div>
            <div style={{ color: 'rgba(232,150,73,1)',display: 'flex', position: 'absolute', fontSize: 14, top: 500, left: '65.5%' }}>
                { eletricRoomState.KV04.map((e,i) => 
                    <div key={i} style={{ marginRight: 22 }}>{e}A</div>
                )}
            </div>
        </span>
    )
}

const Kv04List: React.FC = observer(KV04List)

type IData = {
    currentName: string,
    data: Array<any>,
    color: string
}

const IEvery : React.FC<IData> = ({currentName, data, color, children}) => {
    return (
        <div style={{ display: 'flex', color: color, fontSize: 14 }}>
           {currentName}
           { data.map(e => {
               return (
                   <div style={{paddingRight: 25}}>{e}A</div>
               )
           }) } 
        </div>
    )
}

const ISum : React.FC = () => {
    return (
        <>
            <div style={{ position: 'absolute', display: 'flex', bottom: 210, left: '35.5%' }}>
                <IEvery currentName='Ia: ' data={[100,200,113,200,222]} color="rgba(43,162,255,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200,122]} color="rgba(43,162,255,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200, 321]} color="rgba(43,162,255,1)" />
            </div>
            <div style={{ position: 'absolute', display: 'flex', bottom: 175, left: '35.5%' }}>
                <IEvery currentName='Ia: ' data={[100,200,113,200,222]} color="rgba(45,240,224,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200,122]} color="rgba(45,240,224,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200, 321]} color="rgba(45,240,224,1)" />
            </div>
            <div style={{ position: 'absolute', display: 'flex', bottom: 140, left: '35.5%' }}>
                <IEvery currentName='Ia: ' data={[100,200,113,200,222]} color="rgba(232,150,73,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200,122]} color="rgba(232,150,73,1)" />
                <div style={{width: 8, height: 1 }}></div>
                <IEvery currentName='' data={[100,200,113,200, 321]} color="rgba(232,150,73,1)" />
            </div>
        </>
    )
}

// 当前温度
const NowTemputure : React.FC = () => {
    const _colors = [
        'rgba(43,162,255,1)','rgba(45,240,224,1)','rgba(232,150,73,1)'
    ]
    const _data : Array<eleInterface> = [{
        name: 'A',
        value: '30.00',
        unit: '℃'
    },{
        name: 'B',
        value: '30.00',
        unit: '℃'
    },{
        name: 'C',
        value: '33.00',
        unit: '℃'
    }]
    return (
        <div style={{ position: 'absolute', display: 'flex', width: 140, top: '39%', left: '24%'}}>
            <div style={{ width: '50%', alignItems: 'center', display: 'flex', fontSize: 14,paddingBottom: 12 }}>
                当前温度：
            </div>
            <div style={{ width: '50%', alignItems: 'center', display: 'flex'}}>
                <Mixin colorList={_colors} msg={_data} />
            </div>
        </div>
    )
}

const eletricRoom : React.FC<any> = () => {
    const ColorKv10List : Array<string> = [
        'white',
        'white'
    ]
    const valKv10List : Array<eleInterface> = [{
        name: 'Uab',
        value: '10.00',
        unit: 'KV'
    },{
        name: 'Ubc',
        value: '10.00',
        unit: 'KV'
    }]
    const valKv10Style : React.CSSProperties = {
        position: 'absolute',
        top: 45,
        left: '41%'
    }
    const kui : Array<eleInterface> = [{
        name: 'P',
        value: '00.00',
        unit: 'KW'
    },{
        name: 'Q',
        value: '00.00',
        unit: 'KVar'
    },{
        name: 'Ia',
        value: '233.00',
        unit: 'A'
    },{
        name: 'Ib',
        value: '233.00',
        unit: 'A'
    },{
        name: 'Ic',
        value: '233.00',
        unit: 'A'
    }]
    const commonColors = [
        'white','white','rgba(43,162,255,1)','rgba(45,240,224,1)','rgba(232,150,73,1)'
    ]
    return (
        <div id="container">
            {/* 10Kv母线侧 */}
            <div style={valKv10Style}>
                <Mixin colorList={ColorKv10List} msg={valKv10List} />
            </div>
            {/* 馈线柜1 */}
            <div style={{ position: 'absolute', top: 45, left: '51.5%' }}>
                <Mixin colorList={commonColors} msg={kui} />
            </div>
            {/* 馈线柜2 */}
            <div style={{ position: 'absolute', top: 45, left: '61.5%' }}>
                <Mixin colorList={commonColors} msg={kui} />
            </div>
            {/* 馈线柜3 */}
            <div style={{ position: 'absolute', top: 45, left: '70.5%' }}>
                <Mixin colorList={commonColors} msg={kui} />
            </div>
            {/* 0.4KV母线 */}
            <Kv04List />
            {/* 高压侧 */}
            <VanA msg={eletricRoomState.heighVolte} />
            {/* 低压侧 */}
            <VandD msgl={eletricRoomState.lowVoltel} msgr={eletricRoomState.lowVolter} />
            <img style={{placeSelf: 'start', width: 1200, height: 800,margin: '0px auto' }} src={bg} alt="" />
            {/* 环境状态 */}
            <EnvStatus temperature={36.8} wet={56} />
            {/* 图例 */}
            <PicExp />
            {/* 接线端子的数据 */}
            <ISum />
            {/* 温度 */}
            <NowTemputure />
        </div>
    )
}

export default observer(eletricRoom)
