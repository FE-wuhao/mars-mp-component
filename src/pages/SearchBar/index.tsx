/*
 * @Author: 吴灏
 * @Date: 2021-04-21 11:07:49
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-05 22:37:55
 * @Description: file content
 */
import React from 'react'
import { View, Input, BaseEventOrig, Image } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'
import search from '@/assets/search.svg'
import styles from './index.scss'

export interface ISearchProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

const SearchBar: React.FC<ISearchProps> = (props) => {
  const { placeholder = '搜索你想要的', value, onChange } = props

  const handleInputChange = (e: BaseEventOrig<InputProps.inputEventDetail>) => {
    onChange?.(e.detail.value)
  }

  return (
    <View className={styles.container}>
      <Image className={styles.icon} src={search} />

      <Input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onInput={handleInputChange}
      />
    </View>
  )
}

export default SearchBar
