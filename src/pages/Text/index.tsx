/*
 * @Author: wangrt
 * @Date: 2021-06-21 11:26:12
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 10:08:25
 * @Description: file content
 */
import React, { useState } from 'react'
import { Text } from '@tarojs/components'
import useSafeEffect from '@/hooks/useSafeEffect'

export interface ITextProps {
  className?: string
  color?: 'light-gray' | 'gray' | 'default' | 'white'
  size?: 'small' | 'middle' | 'default' | 'large'
  onClick?: () => void
  style?: React.CSSProperties
  selectable?: boolean
  space?: 'ensp' | 'emsp' | 'nbsp'
  decode?: boolean
  /** 是否是副标题 */
  type?: 'subHeading' | 'price'
}

interface ITextStyle {
  color?: string
  subheading?: boolean
  fontSize?: '12px' | '14px' | '16px'
}

const DefaultText: React.FC<ITextProps> = (props) => {
  const {
    className = undefined,
    children,
    color = 'default',
    size = 'default',
    onClick,
    style,
    selectable = false,
    space = undefined,
    decode = false,
    type,
  } = props

  const [textStyle, setTextStyle] = useState<ITextStyle>({})

  useSafeEffect(() => {
    switch (color) {
      case 'light-gray':
        setTextStyle((pre) => {
          return {
            ...pre,
            color: 'rgba(51, 51, 51, 0.5)',
          }
        })

        break
      case 'gray':
        setTextStyle((pre) => {
          return {
            ...pre,
            color: '#666',
          }
        })

        break
      case 'white':
        setTextStyle((pre) => {
          return {
            ...pre,
            color: '#fff',
          }
        })

        break
      default:
        setTextStyle((pre) => {
          return {
            ...pre,
            color: '#000',
          }
        })
    }
  }, [color])

  useSafeEffect(() => {
    switch (size) {
      case 'small':
        setTextStyle((pre) => {
          return {
            ...pre,
            fontSize: '12px',
          }
        })

        break
      case 'middle':
        setTextStyle((pre) => {
          return {
            ...pre,
            fontSize: '14px',
          }
        })

        break
      case 'large':
        setTextStyle((pre) => {
          return {
            ...pre,
            fontSize: '16px',
          }
        })

        break
      default:
        setTextStyle((pre) => {
          return {
            ...pre,
            fontSize: '14px',
          }
        })
    }
  }, [size])

  useSafeEffect(() => {
    switch (type) {
      case 'subHeading':
        setTextStyle((pre) => {
          return {
            ...pre,
            color: 'rgba(51, 51, 51, 0.5)',
            fontSize: '12px',
          }
        })
        break
      case 'price':
        setTextStyle((pre) => {
          return {
            ...pre,
            color: 'rgba(17, 17, 17, 1)',
            fontSize: '16px',
            fontFamily: 'PingFangSC-Medium, PingFang SC',
            fontWeight: '500',
          }
        })
        break
    }
  }, [type])

  return (
    <Text
      className={className}
      selectable={selectable}
      space={space}
      decode={decode}
      onClick={onClick}
      style={{ ...textStyle, ...style }}
    >
      {children}
    </Text>
  )
}

export default DefaultText
