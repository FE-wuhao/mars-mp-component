/*
 * @Author: 吴灏
 * @Date: 2021-07-04 22:01:28
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-05 23:15:08
 * @Description: file content
 */
import { View } from '@tarojs/components'
// import Button from './Button'
import Badge from './Badge'
// import BinaryButtonGroup from './BinaryButtonGroup'
// import BottomBar from './BottomBar'
// import Card from './Card'
// import Counter from './Counter'
// import Divider from './Divider'
// import FlexLayout from './FlexLayout'
// import FloatLayout from './FloatLayout'
// import MessageBox from './MessageBox'
// import Modal from './Modal'
// import NavBar from './NavBar'
// import Navigation from './Navigation'
// import Page from './Page'
// import PageLoading from './PageLoading'
// import SearchBar from './SearchBar'
// import Section from './Section'
// import Tabs from './Tabs'
// import Tag from './Tag'
// import Text from './Text'

import styles from './index.scss'

const HomePage = () => {
  return (
    <View className={styles['components-preview-container']}>
      <Badge count={20000}>徽标</Badge>
      {/* <Button>按钮</Button>
      <BinaryButtonGroup />
      <BottomBar>底部导航栏</BottomBar>
      <Card>卡片</Card>
      <Counter />
      <Divider>分割线</Divider>
      <FlexLayout>flex布局</FlexLayout>
      <FloatLayout display>底部弹出浮动弹窗</FloatLayout>
      <MessageBox>消息框形状的文本框</MessageBox>
      <Modal display>弹窗</Modal>
      <NavBar title="顶部导航栏" /> */}
    </View>
  )
}

export default HomePage
