/*
 * @Author: 吴灏
 * @Date: 2021-07-04 21:24:35
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 22:37:29
 * @Description: file content
 */
import { Component } from 'react'

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
