/*
 * @Author: 吴灏
 * @Date: 2021-05-21 13:49:37
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-05-25 20:47:20
 * @Description: file content
 */
import { View } from '@tarojs/components'
import React from 'react'
import styles from './index.scss'

// eslint-disable-next-line no-shadow
enum EColorMapper {
  'minus' = 'rgba(235, 92, 79, 1)',

  'discount' = 'rgba(246, 120, 70, 1)',

  'remark' = 'rgba(5, 183, 97, 1)',
}

export interface ITagProps {
  type?: 'minus' | 'discount' | 'remark'
  backgroundColor?: string
  color?: string
  children: string
}

const Tag: React.FC<ITagProps> = (props) => {
  const { type, backgroundColor, color, children } = props

  return (
    <View
      className={styles['tag-container']}
      style={{ backgroundColor: backgroundColor || (type ? EColorMapper[type] : undefined), color }}
    >
      {children}
    </View>
  )
}

export default Tag
