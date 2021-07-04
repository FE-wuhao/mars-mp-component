/*
 * @Author: 吴灏
 * @Date: 2021-04-22 14:35:30
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-03 15:38:00
 * @Description: file content
 */
import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import styles from './index.scss'

export interface IButtonProps {
  children: React.ReactNode
  size?: 'small' | 'normal' | 'large'
  onClick?: () => void
  style?: React.CSSProperties
  fontStyle?: React.CSSProperties
  type?: 'default' | 'primary' | 'dark' | 'text'
  fullWidth?: boolean
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    children,
    size = 'normal',
    onClick,
    style,
    fontStyle,
    type = 'primary',
    fullWidth,
  } = props

  const buttonClass = classNames(styles.button, styles[`button-${size}`], styles[`button-${type}`])

  const fontClass = classNames(styles.font, styles[`${size}-font`], {})

  return (
    <View
      className={buttonClass}
      onClick={onClick}
      style={{ width: fullWidth ? '100%' : 'auto', ...style }}
    >
      <View className={fontClass} style={fontStyle}>
        {children}
      </View>
    </View>
  )
}

export default Button
