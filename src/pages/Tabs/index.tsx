/*
 * @Author: 吴灏
 * @Date: 2021-06-01 11:11:27
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-06-02 09:16:09
 * @Description: file content
 */
import { View } from '@tarojs/components'
import React, { Children, useState } from 'react'
import useSafeEffect from '@/hooks/useSafeEffect'
import styles from './index.scss'
import TabPane, { ITabPaneProps } from './components/TabPane'

export interface ITabsProps {
  /** tab中间渲染的内容 */
  children: React.ReactElement<ITabPaneProps>[]
  /** 初始激活的tab key */
  defaultActiveKey: string
  /** 当前激活的tab key */
  activeKey?: string
  /** tab切换钩子函数 */
  onChange?: (currentActiveKey: string) => void
  /** 自定义header样式 */
  headerStyle?: React.CSSProperties
  /** 自定义body样式 */
  bodyStyle?: React.CSSProperties
  /** 可滚动 */
  scroll?: boolean
}

const Tabs = (props: ITabsProps) => {
  const {
    defaultActiveKey,
    activeKey,
    onChange,
    children,
    headerStyle,
    bodyStyle,
    scroll = false,
  } = props

  const [currentActiveTab, setCurrentActiveTab] = useState(defaultActiveKey)

  useSafeEffect(
    (isCurrentRender) => {
      if (isCurrentRender && activeKey) setCurrentActiveTab(activeKey)
    },
    [activeKey]
  )

  const handleTabChange = (key: string, onClick?: (id: string) => void) => {
    setCurrentActiveTab(key)

    onChange?.(key)

    onClick?.(key)
  }

  return (
    <View className={styles['tabs-container']}>
      <View
        className={styles['tabs-header']}
        style={{ overflow: scroll ? 'auto' : 'hidden', ...headerStyle }}
      >
        {Children.map(children, (item) => (
          <TabPane
            {...item.props}
            key={item.props.id}
            active={
              item.props.active === undefined
                ? currentActiveTab === item.props.id
                : item.props.active
            }
            onClick={(key) => handleTabChange(key, item.props.onClick)}
          >
            {item.props.children}
          </TabPane>
        ))}
      </View>
      <View className={styles['tabs-body']} style={bodyStyle}>
        {Children.map(children, (item) => (
          <View style={{ display: currentActiveTab === item.props.id ? 'block' : 'none' }}>
            {item.props.children}
          </View>
        ))}
      </View>
    </View>
  )
}

Tabs.TabPane = TabPane

export default Tabs
