import React, {createRef} from 'react';

export function logProps(WrappedComponent: any) {
  const ref = createRef()
    return class extends React.Component {
        constructor(props: any) {
            super(props)
            this.state = {
                count: 1
            }
            this.test = this.test.bind(this)
        }

        test(code: any) {
          this.setState({
              count: code
          })
          console.log(code);
        }

        componentDidUpdate(prevProps: any) {
            console.log('current props:', this.props);
            console.log('Previous props:', prevProps);
        }
        componentDidMount() {
            console.log('HOC初始化！')
            console.log(ref);
        }
        render () {
            return <WrappedComponent ref={ref} test={this.test} state={this.state} {...this.props} />;
        }
    }
}

export function MyHoc(WrappedComponent: any) {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {
        test: 'this is my Hoc !'
      }
      this.changeValue = this.changeValue.bind(this)
    }

    componentDidMount () {
      console.log('HOC初始化！')
    }

    componentDidUpdate () {
      console.log('MyHoc!');
    }

    changeValue = () => {
      console.log(Math.random() * 10000);
      this.setState({
        test: Math.random() * 10000
      })
    }

    render () {
      return < WrappedComponent state={this.state} changeValue={this.changeValue} {...this.props} />
    }
  }
}