/*
 * @Author: 吴灏
 * @Date: 2021-07-02 14:55:13
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-02 16:16:25
 * @Description: file content
 */
import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import Close from '@/fonts/cart/close.svg'
import Date from '@/fonts/cart/date.svg'
import Share from '@/fonts/cart/share.svg'

import styles from './index.scss'

export interface IModalProps {
  display: boolean
  onClose?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
}

const Modal: React.FC<IModalProps> = (props) => {
  const { display, onClose, children, style } = props
  // 顶部导航栏高度
  const marginTop = useMemo(
    () =>
      Taro.getMenuButtonBoundingClientRect().height + Taro.getMenuButtonBoundingClientRect().top,
    []
  )
  // 底部导航栏高度
  const bottomBarHeight = useMemo(() => 80, [])
  // modal与顶部/底部的间隙*2
  const horizontalPadding = useMemo(() => 40, [])
  // modal高度
  const contentHeight =
    Taro.getSystemInfoSync().screenHeight - marginTop - bottomBarHeight - horizontalPadding

  return display ? (
    <View
      className={styles['modal-mask']}
      catchMove
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <View
        className={styles['modal-container']}
        style={{ marginTop, height: contentHeight, ...style }}
      >
        <Image className={styles['modal-close-btn']} src={Close} onClick={onClose} />
        <View className={styles['modal-content']}>{children}</View>
      </View>
    </View>
  ) : null
}

export default Modal
