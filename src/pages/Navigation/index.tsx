/*
 * @Author: 吴灏
 * @Date: 2021-04-21 15:56:01
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-01 18:03:32
 * @Description: file content
 */
import React, { useState } from 'react'
import type { IOption } from '@/interfaces'
import { View, Image } from '@tarojs/components'

import styles from './index.scss'

export interface INaVigationOption extends IOption {
  image: string
}
export interface INavigationProps {
  options: INaVigationOption[]
  value?: string
  defaultValue?: string
  enableImage?: boolean
  onSelectChange?: (value: string) => void
}

const Navigation: React.FC<INavigationProps> = (props) => {
  const {
    options,
    value,
    defaultValue = options[0]?.value || '',
    enableImage = false,
    onSelectChange,
  } = props

  const [activeOption, setActiveOption] = useState(defaultValue)

  const handleSelectChange = (val: string) => {
    if (val !== activeOption) {
      setActiveOption(val)
      onSelectChange?.(val)
    }
  }

  return (
    <View className={styles['navigation-container']}>
      {options.map((option, index) => {
        const isActive = (value || activeOption) === option.value
        const isBeforeActive =
          index < options.length - 1 ? options[index + 1].value === (value || activeOption) : false
        const isAfterActive =
          index > 0 ? options[index - 1].value === (value || activeOption) : false

        const itemClassName = `${styles['navigation-item-container']} ${
          isActive ? styles['navigation-item-container-active'] : ''
        } ${isBeforeActive ? styles['navigation-item-container-active-before'] : ''} ${
          isAfterActive ? styles['navigation-item-container-active-after'] : ''
        }`

        return (
          <View key={option.value} className={styles['navigation-item-container-mask']}>
            <View
              key={option.value}
              className={itemClassName}
              onClick={() => {
                handleSelectChange(option.value)
              }}
            >
              <View
                className={styles['navigation-item-active-flag']}
                style={{ visibility: isActive ? 'visible' : 'hidden' }}
              />
              <View className={styles['navigation-item-label-and-img-container']}>
                {enableImage && (
                  <Image className={styles['navigation-item-img']} src={option.image}></Image>
                )}
                <View className={styles['navigation-item']}>{option.label}</View>
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default Navigation
