/*
 * @Author: 吴灏
 * @Date: 2021-05-31 15:45:50
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 23:34:08
 * @Description: file content
 */
import { Image, View } from '@tarojs/components'
import React from 'react'

import styles from './index.scss'
import RemarkSharpCorner from '.@/assts/remarkSharpCorner.png'

export interface IMessageBoxProps {
  value: React.ReactNode
  style?: React.CSSProperties
}

const MessageBox: React.FC<IMessageBoxProps> = (props) => {
  const { value, style } = props

  return (
    <View className={styles['message-box-container']} style={style}>
      <Image src={RemarkSharpCorner} className={styles['message-box-container-sharp-corner']} />
      <View className={styles['message-box-body']}>{value}</View>
    </View>
  )
}

export default MessageBox
