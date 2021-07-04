/*
 * @Author: 吴灏
 * @Date: 2021-06-01 15:17:11
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-06-01 20:13:09
 * @Description: file content
 */
import { View } from '@tarojs/components'
import ClassNames from 'classnames'

import styles from './index.scss'

export interface ITabPaneProps {
  /** 唯一标记 */
  id: string
  /** 当前tab的标题内容 */
  value: string
  /** 是否被选中 */
  active?: boolean
  /** tab点击事件 */
  onClick?: (key: string) => void
  /** TabPane内容 */
  children?: React.ReactNode
  /** 自定义样式 */
  style?: React.CSSProperties
}

const TabPane: React.FC<ITabPaneProps> = (props) => {
  const { id, value, active, onClick, style } = props

  const containerCLS = ClassNames(styles['tab-pane-container'], {
    [styles['tab-pane-active']]: active,
  })

  const handleClick = () => {
    onClick?.(id)
  }

  return (
    <View className={containerCLS} onClick={handleClick} style={style}>
      {value}
    </View>
  )
}

export default TabPane
