import * as React from 'react'
import arrow from '../../arrow.png'
import arrow2 from '../../arrow2.png'
import point from '../../point.png';

const _style : React.CSSProperties = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    right: 100,
    justifyItems: 'center',
    alignItems: 'end',
    bottom: 120,
}

const picExp : React.FC = () => {
    return (
        <div style={_style}>
            <div style={{ fontSize: 14, textAlign: 'right', marginBottom:15 }}> 
                图例
            </div>
            <div style={{ width: 175,marginBottom:15, display: 'flex', justifyContent: 'space-between'}}>
                <img src={arrow2} alt="" style={{ marginRight: 10 }} />
                <div style={{
                    width: 12,
                    height: 22,
                    background: '#fa6074',
                    marginRight: 10
                }} />
                <div style={{
                    width: 22,
                    height: 22,
                    background: '#fa6074',
                    borderRadius: '50%',
                    marginRight: 30
                }} />
                <div style={{color: 'white', fontSize: 14}}>开关闭合</div>
            </div>
            <div style={{ width: 175,marginBottom:15, display: 'flex',justifyContent: 'space-between'}}>
                <img src={arrow} alt="" style={{ marginRight: 10 }} />
                    <div style={{
                        width: 12,
                        height: 22,
                        background: '##2df0e0',
                        marginRight: 10
                    }} />
                    <div style={{
                        width: 22,
                        height: 22,
                        background: '##2df0e0',
                        borderRadius: '50%',
                        marginRight: 30
                    }} />
                <div style={{color: 'white', fontSize: 14}}>开关断开</div>
            </div>
            <div style={{ width: 175, marginBottom:15, display: 'flex',justifyContent: 'space-between'}}>
                <img src={point} alt="" style={{ marginRight: 10 }} /> 
                <div style={{color: 'white', fontSize: 14}}>开关异常</div>
            </div>
            <div style={{width: 175, marginBottom:15, display: 'flex' ,justifyContent: 'space-between'}}>
                <div style={{
                    width: 22,
                    height: 22,
                    background: '#fa6074',
                    borderRadius: '50%',
                    marginRight: 30,
                }} />
                <div style={{color: 'white', fontSize: 14}}>断路器</div> 
            </div>
            <div style={{ width: 175, marginBottom:15, display: 'flex', justifyContent: 'space-between'}}>
                <div style={{
                    width: 12,
                    height: 22,
                    background: '#fa6074',
                    marginRight: 10,
                    marginLeft: 5
                }} />
                <div style={{color: 'white', fontSize: 14 }}>隔离开关</div> 
            </div>
            <div style={{ width: 175, marginBottom:15, display: 'flex', justifyContent: 'space-between'}}>
                <img src={arrow2} alt="" style={{ marginRight: 10 }} />
                <div style={{color: 'white', fontSize: 14}}>手车开关</div> 
            </div>
        </div>
    )
}

export default picExp