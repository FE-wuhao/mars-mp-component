/*
 * @Author: 吴灏
 * @Date: 2021-07-03 15:01:18
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-03 15:07:15
 * @Description: file content
 */
import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import styles from './index.scss'

export interface IDividerProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Divider: React.FC<IDividerProps> = (props) => {
  const { children, style } = props

  const cls = classNames(styles['divider'], { [styles['divider-text']]: children })

  return (
    <View className={cls} style={style}>
      {children}
    </View>
  )
}

export default Divider
