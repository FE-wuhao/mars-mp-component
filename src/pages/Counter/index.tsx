/*
 * @Author: 吴灏
 * @Date: 2021-05-21 13:48:48
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-03 18:03:37
 * @Description: file content
 */
import React, { useState } from 'react'
import { View } from '@tarojs/components'
import useSafeEffect from '@/hooks/useSafeEffect'

import styles from './index.scss'

export interface ICounterProps {
  max?: number
  min?: number
  defaultValue?: number
  value?: number
  onChange?: (val: number) => void
}

const Counter: React.FC<ICounterProps> = (props) => {
  const { max = 999, min = 0, defaultValue = 1, value, onChange } = props

  const [count, setCount] = useState(defaultValue || value || 0)

  useSafeEffect(
    (isCurrentRender) => {
      if (isCurrentRender && value) setCount(value)
    },
    [value]
  )

  const handleMinus = () => {
    setCount((pre) => {
      const res = pre > min ? pre - 1 : pre

      onChange?.(res)

      return res
    })
  }

  const handlePlus = () => {
    if (max) {
      setCount((pre) => {
        const res = pre < max ? pre + 1 : pre

        onChange?.(res)

        return res
      })
    } else {
      setCount((pre) => {
        const res = pre + 1

        onChange?.(res)

        return res
      })
    }
  }

  return (
    <View className={styles['counter-container']}>
      <View
        className={styles['minus-button']}
        onClick={handleMinus}
        style={
          (value || count) === min
            ? {
                color: 'rgba(17, 17, 17, 0.39)',
              }
            : { color: 'rgba(17, 17, 17, 1)' }
        }
      >
        -
      </View>
      <View className={styles['line']} />
      <View className={styles['quantity']}>{value || count}</View>
      <View className={styles['line']} />
      <View
        className={styles['plus-button']}
        onClick={handlePlus}
        style={
          (value || count) === max
            ? {
                color: 'rgba(17, 17, 17, 0.39)',
              }
            : { color: 'rgba(17, 17, 17, 1)' }
        }
      >
        +
      </View>
    </View>
  )
}

export default Counter
