/*
 * @Author: 吴灏
 * @Date: 2021-05-21 13:48:31
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 23:31:49
 * @Description: file content
 */
import React from 'react'
import { Image, View } from '@tarojs/components'
import ClassNames from 'classnames'
import RightArrow from '@/assets/rightArrow.svg'

import styles from './index.scss'

export interface ICardProps {
  /** 整块header自定义 */
  header?: React.ReactNode
  /** 整块body自定义 */
  body?: React.ReactNode
  /** header开启全宽度 */
  headerFullWidth?: boolean
  /** body开启全宽度 */
  bodyFullWidth?: boolean
  /** header左边内容 */
  headerLeft?: React.ReactNode
  /** header左边icon */
  headerLeftIcon?: React.ReactNode
  /** header左边字体颜色 */
  headerLeftColor?: string
  /** header右边内容 */
  headerRight?: React.ReactNode
  /** header右边icon */
  headerRightIcon?: 'rightArrow' | React.ReactNode
  /** header右边字体颜色 */
  headerRightColor?: string
}

const Card: React.FC<ICardProps> = (props) => {
  const {
    header,
    body,
    headerFullWidth = false,
    bodyFullWidth = false,
    headerLeft,
    headerLeftIcon,
    headerLeftColor,
    headerRight,
    headerRightIcon,
    headerRightColor,
  } = props

  const headerCLS = ClassNames(styles['header'], { [styles['full-width']]: headerFullWidth })

  const bodyCLS = ClassNames(styles['body'], { [styles['full-width']]: bodyFullWidth })

  const renderHeader = () => {
    if (header) return header

    return (
      <View className={headerCLS}>
        <View className={styles['header-left']} style={{ color: headerLeftColor }}>
          {headerLeftIcon && <View className={styles['header-left-icon']}>{headerLeftIcon}</View>}
          {headerLeft && <View className={styles['header-left-value']}>{headerLeft}</View>}
        </View>
        <View className={styles['header-right']} style={{ color: headerRightColor }}>
          {headerRight && <View className={styles['header-right-value']}>{headerRight}</View>}
          {headerRightIcon && (
            <View className={styles['header-right-icon']}>
              {headerRightIcon === 'rightArrow' ? (
                <Image src={RightArrow} className={styles['icon-right-arrow']} />
              ) : (
                headerRightIcon
              )}
            </View>
          )}
        </View>
      </View>
    )
  }

  return (
    <View className={styles['container']}>
      {renderHeader()}
      {body && <View className={bodyCLS}>{body}</View>}
    </View>
  )
}

export default Card
