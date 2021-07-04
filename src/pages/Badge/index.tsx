/*
 * @Author: 吴灏
 * @Date: 2021-04-22 13:40:05
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 22:32:16
 * @Description: file content
 */
import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.scss'

export interface IBadgeProps {
  count?: number
  children?: React.ReactNode
  offset?: [number, number]
  onClick?: () => void
}

const Badge: React.FC<IBadgeProps> = (props) => {
  const { count, children, offset, onClick } = props

  return (
    <View className={styles.container} onClick={onClick}>
      <View className={styles.children}>{children}</View>

      {!!count && (
        <View
          className={styles.badge}
          style={
            offset && {
              transform: `translate(${offset[0] - 12}px,${offset[1] - 4}px)`,
            }
          }
        >
          <View className={styles.font}>{count}</View>
        </View>
      )}
    </View>
  )
}

export default Badge
