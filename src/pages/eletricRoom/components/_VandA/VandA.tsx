import * as React from 'react'
import './VandA.css'
import { eleInterface } from '../../../../store/eletricRoom/eleInterface'

type AppProps = {
    msg: Array<eleInterface>,
    colorList: Array<string>
}

type AppProps2 = {
    msg: Array<eleInterface>
}

type AppProps3 = {
    msgl: Array<eleInterface>,
    msgr: Array<eleInterface>
}

const miXinList = ['rgba(43,162,255,1)','rgba(45,240,224,1)','rgba(232,150,73,1)']
const AcolorList = ['white', 'white', ...miXinList]
const VcolorList = ['white','white', 'white', ...miXinList]


export const Mixin : React.FC<AppProps> = ({msg, colorList, children}) => {
    return (
        <div id='container_V'>
            {
                msg.map((e, i) => {
                    return (
                        <div key={i} className='container_V__inner' style={{'color': colorList[i]}}>
                            { e.name }: {e.value} {e.unit}
                        </div>
                    )
                })
            }
        </div>
    )
}

export const VanA : React.FC<AppProps2> = ({msg}) => {
    return (
        <div style={{ position: 'absolute', left: 30 }}>
            <div style={{ fontSize: 14,paddingBottom: 15 }}>高压侧</div>
            <Mixin msg={msg} colorList={AcolorList} />
        </div>
    )
}

const styleVandD : React.CSSProperties = {
    position: 'absolute',
    bottom: 120,
    left: 30
}
const styleVandDR : React.CSSProperties = {
    position: 'absolute',
    left: 100,
    top: 131
}

export const VandD : React.FC<AppProps3> = ({msgl, msgr}) => {
    return (
        <div className="VandD" style={styleVandD}>
            <div style={{ fontSize: 14,paddingBottom: 15 }}>低压侧</div>
            <Mixin msg={msgl} colorList={VcolorList} />
            <div style={styleVandDR}>
                <Mixin msg={msgr} colorList={miXinList} />
            </div>
        </div>
    )
}

