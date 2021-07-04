/*
 * @Author: 吴灏
 * @Date: 2021-07-02 17:05:19
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-03 10:53:25
 * @Description: file content
 */
import { View } from '@tarojs/components'
import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'

import styles from './index.scss'

export interface IFloatLayoutProps {
  display: boolean
  children: React.ReactNode
  style?: React.CSSProperties
  onClose?: () => void
}

const FloatLayout: React.FC<IFloatLayoutProps> = (props) => {
  const { display, children, style, onClose } = props

  const screenHeight = useMemo(() => Taro.getSystemInfoSync().screenHeight, [])
  const bottomBarHeight = useMemo(() => 80, [])
  const marginTop = useMemo(
    () =>
      Taro.getMenuButtonBoundingClientRect().height +
      Taro.getMenuButtonBoundingClientRect().top +
      126,
    []
  )

  const maxHeight = useMemo(() => screenHeight - marginTop, [marginTop, screenHeight])
  const minHeight = useMemo(() => screenHeight / 2 - bottomBarHeight, [
    bottomBarHeight,
    screenHeight,
  ])

  const maskCLS = classNames(styles['float-layout-mask'], {
    [styles['float-layout-mask-active']]: display,
    [styles['float-layout-mask-disable']]: !display,
  })

  const containerCLS = classNames(styles['float-layout-container'], {
    [styles['float-layout-container-active']]: display,
    [styles['float-layout-container-disable']]: !display,
  })

  const handleClickMask = () => {
    onClose?.()
  }

  return (
    <View className={maskCLS} onClick={handleClickMask}>
      <View
        className={containerCLS}
        style={{
          maxHeight,
          minHeight,
          ...style,
        }}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </View>
    </View>
  )
}

export default FloatLayout
