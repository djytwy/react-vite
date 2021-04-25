import * as React from 'react';
import './fontImport.css';
import icon_wendu from '../../icon_wendu.png';

type AppProps = {
    temperature: number,
    wet: number
}

const styleFont : React.CSSProperties = {
    fontFamily: 'pangmenzhengdao',
    fontSize: 20,
    color: 'white'
}

const envStatus : React.FC<AppProps> = ({temperature, wet, children}) => {
    return (
        <div style={{ position: 'absolute', right: 100  ,display: 'flex', flexDirection: 'column' }}>
            <div style={{ textAlign: 'right' ,fontSize: 14, color: 'rgba(43,162,255,1)', marginBottom: 15}}>
                环境状态
            </div>
            <div style={{ display: 'flex',width: 180 ,justifyContent:'space-between', marginBottom: 15 }}>
                <div style={styleFont}>
                    {temperature}℃
                </div>
                <div style={{ width: 80, display: 'flex', alignItems: 'center',justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: 14, color: 'white'}}>
                        温度
                    </div>
                    <img src={icon_wendu}/>
                </div>
            </div>
            <div style={{ display: 'flex',width: 180, justifyContent:'space-between', marginBottom: 15 }}>
                <div style={styleFont}>
                    {wet}%rh
                </div>
                <div style={{ width: 80, display: 'flex', alignItems: 'center',justifyContent: 'flex-end' }}>
                    <div style={{ fontSize: 14, color: 'white'}}>
                        湿度
                    </div>
                    <img src={icon_wendu}/>
                </div>
            </div>
        </div>
    )
}

export default envStatus