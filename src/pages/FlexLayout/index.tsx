/*
 * @Author: 吴灏
 * @Date: 2021-07-03 14:32:04
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-07-04 14:25:13
 * @Description: file content
 */
import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import styles from './index.scss'

export interface IFlexLayoutProps extends ViewProps {
  children: React.ReactNode
  style?: React.CSSProperties
  direction?: 'column' | 'row'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
}

const FlexLayout: React.FC<IFlexLayoutProps> = (props) => {
  const { children, style, direction, justifyContent, alignItems, ...restProps } = props

  return (
    <View
      className={styles['flex-layout']}
      style={{ flexDirection: direction, justifyContent, alignItems, ...style }}
      {...restProps}
    >
      {children}
    </View>
  )
}

export default FlexLayout
