/*
 * @Author: 吴灏
 * @Date: 2021-05-18 09:38:17
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-05-20 11:57:33
 * @Description: file content
 */
import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.scss'

export interface ISectionProps {
  title: string
  children?: React.ReactNode
  headerRightContent?: React.ReactNode
}

const Section: React.FC<ISectionProps> = (props) => {
  const { title, children, headerRightContent } = props

  return (
    <View className={styles.container}>
      <View className={styles.header}>
        <View className={styles.title}>{title}</View>
        {headerRightContent && <View>{headerRightContent}</View>}
      </View>
      {children}
    </View>
  )
}

export default Section
