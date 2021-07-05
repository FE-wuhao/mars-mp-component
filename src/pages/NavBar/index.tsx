/*
 * @Author: 吴灏
 * @Date: 2021-05-31 11:18:27
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-05 22:45:29
 * @Description: file content
 */
import { View, Image } from '@tarojs/components'
import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'

import LeftArrow from '@/assets/leftArrow.svg'
import styles from './index.scss'

export interface INavBarProps {
  /** 标题内容 */
  title: React.ReactNode
  /** 是否占位 */
  isOccupy?: boolean
  /** 标题位置 */
  titlePosition?: 'left' | 'center'
  /** 容器样式 */
  containerStyle?: React.CSSProperties
  /** 内容样式 */
  bodyStyle?: React.CSSProperties
  /** 页面显示返回按钮 */
  enableReturnBtn?: boolean
  /** 返回按钮点击事件 */
  onReturn?: () => void
}

const NavBar: React.FC<INavBarProps> = (props) => {
  const {
    title,
    isOccupy = true,
    titlePosition = 'center',
    containerStyle,
    bodyStyle,
    enableReturnBtn = true,
    onReturn = () => Taro.navigateBack(),
  } = props

  const navBarHeight = useMemo(() => Taro.getMenuButtonBoundingClientRect().height, [])
  const navBarPaddingTop = useMemo(() => Taro.getMenuButtonBoundingClientRect().top, [])

  return (
    <>
      <View
        className={styles['nav-bar-container']}
        style={{ ...containerStyle, paddingTop: `${navBarPaddingTop}px` }}
      >
        <View className={styles['nav-bar-body']} style={{ ...bodyStyle, height: navBarHeight }}>
          {enableReturnBtn && (
            <View className={styles['nav-bar-return-button-container']}>
              <View className={styles['nav-bar-return-button-wrapper']} onClick={onReturn}>
                <Image className={styles['nav-bar-return-button']} src={LeftArrow} />
              </View>
            </View>
          )}
          <View
            className={styles['nav-bar-title']}
            style={
              !enableReturnBtn && titlePosition === 'left'
                ? {
                    textAlign: 'left',
                    paddingLeft: '15px',
                  }
                : { justifyContent: 'center' }
            }
          >
            {title}
          </View>
        </View>
      </View>
      {isOccupy ? (
        <View
          className={styles['fake-container']}
          style={{ height: `${navBarHeight + navBarPaddingTop + 18}px` }}
        />
      ) : null}
    </>
  )
}

export default NavBar
