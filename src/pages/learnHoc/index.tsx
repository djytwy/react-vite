import React, { Component } from 'react';
import { logProps, MyHoc } from '../../components/Hoc1';

const ref = React.createRef();

class MyHocTest2 extends Component {
    render () {
        return (
            <div>
                <button onClick={() => {this.props.test('12312312')}}>高阶组件复用</button>
                { this.props.state.count }
            </div>
        )
    }
}

class MyHocTest3 extends Component {
    render () {
        return (
            <div>
                <button onClick={() => {this.props.changeValue()}}>这是我的HOC!</button>
                { this.props.state.test }
            </div>
        )
    }
}

const EnhanceC2 = logProps(MyHocTest2)

const EnhanceC = logProps(MyHocTest2)

const MyHoc1 = MyHoc(MyHocTest3)

const refDemo = React.forwardRef((props, ref) => (
    <button ref={ref} className="refDemo">
        {props.children}
    </button>
))

class HocComponent extends Component {
    render () {
        return (
            <div id='root' >
                <EnhanceC />
                <EnhanceC2 />
                <MyHoc1 ref={ref} />
            </div>
        );
    }
}

export default HocComponent
