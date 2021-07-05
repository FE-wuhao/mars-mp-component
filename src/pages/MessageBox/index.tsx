/*
 * @Author: 吴灏
 * @Date: 2021-05-31 15:45:50
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-05 22:25:38
 * @Description: file content
 */
import { Image, View } from '@tarojs/components'
import React from 'react'
import RemarkSharpCorner from '@/assets/remarkSharpCorner.png'

import styles from './index.scss'

export interface IMessageBoxProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const MessageBox: React.FC<IMessageBoxProps> = (props) => {
  const { children, style } = props

  return (
    <View className={styles['message-box-container']} style={style}>
      <Image src={RemarkSharpCorner} className={styles['message-box-container-sharp-corner']} />
      <View className={styles['message-box-body']}>{children}</View>
    </View>
  )
}

export default MessageBox
