/*
 * @Author: 吴灏
 * @Date: 2021-05-31 15:15:52
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-05-31 15:23:55
 * @Description: file content
 */
import { View } from '@tarojs/components'

import styles from './index.scss'

export interface IBottomBarProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const BottomBar: React.FC<IBottomBarProps> = (props) => {
  const { children, style } = props

  return (
    <View className={styles['bottom-bar-container']} style={style}>
      {children}
    </View>
  )
}

export default BottomBar
