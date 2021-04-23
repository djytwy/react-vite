import React, { useState, useEffect } from 'react';
import './index.scss';

function TestHoc1() {
  const [val, setVal] = useState(0)

  const addVal = () => setVal(val+1)

  useEffect(() => {
    console.log('初始化！')
  },[addVal])
  
  return (
    <div id='root'>
      这是一个高阶组件！
      <div>现在的值：{val} </div>
      <button onClick={addVal}>点击加一</button>
    </div>
  )
}

export default TestHoc1

