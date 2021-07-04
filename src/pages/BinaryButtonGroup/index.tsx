/*
 * @Author: 吴灏
 * @Date: 2021-04-21 14:15:08
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-05-21 15:09:32
 * @Description: file content
 */
import React, { useState } from 'react'
import classnames from 'classnames'
import { View } from '@tarojs/components'
import styles from './index.scss'

export type TActive = 'left' | 'right'
export interface IBinaryButtonGroupPorps {
  leftText?: string
  rightText?: string
  defaultActive?: TActive
  onChange?: (active: TActive) => void
}

const BinaryButtonGroup: React.FC<IBinaryButtonGroupPorps> = (props) => {
  const { leftText = '自提', rightText = '配送', defaultActive = 'left', onChange } = props

  const [active, setActive] = useState(defaultActive)

  const leftClassName = classnames(
    styles['left-button'],
    active === 'left' ? styles['button-active'] : styles['button-inactive']
  )

  const rightClassName = classnames(
    styles['right-button'],
    active === 'right' ? styles['button-active'] : styles['button-inactive']
  )

  const handleSelectChange = (select: TActive) => {
    if (select !== active) {
      setActive(select)
      onChange?.(select)
    }
  }

  return (
    <View className={styles.container}>
      <View
        className={leftClassName}
        onClick={() => {
          handleSelectChange('left')
        }}
      >
        <View className={styles.font}>{leftText}</View>
      </View>
      <View
        className={rightClassName}
        onClick={() => {
          handleSelectChange('right')
        }}
      >
        <View className={styles.font}>{rightText}</View>
      </View>
    </View>
  )
}

export default BinaryButtonGroup
