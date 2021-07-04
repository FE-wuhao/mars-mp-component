/*
 * @Author: wangrt
 * @Date: 2021-06-10 23:22:19
 * @LastEditors: wangrt
 * @LastEditTime: 2021-06-10 23:32:08
 * @Description: file content
 */
import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.scss'

export interface IFooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<IFooterProps> = (props) => {
  const { children } = props

  return (
    <View className={styles.container}>
      {children}
    </View>
  )
}

export default Footer