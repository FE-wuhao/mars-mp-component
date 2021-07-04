/*
 * @Author: CLKimi
 * @Date: 2021-04-25 17:32:33
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-06-30 19:24:13
 * @Description: file content
 */
import { useMonitorPageHooks } from '@/hooks/useMonitorHooks'
import { checkLogin } from '@/utils'
import { View } from '@tarojs/components'
import { ReactNode, useCallback, useLayoutEffect, useState, useContext } from 'react'
import { globalStoreContext, TGlobalStoreContext } from '@/hooks/useGlobalStore'

interface IPageProps {
  children: ReactNode
  /** token验证完毕回调函数 */
  onReady?: () => void
}

const Page: React.FC<IPageProps> = (props) => {
  const { dispatch } = useContext(globalStoreContext as TGlobalStoreContext)

  useMonitorPageHooks()

  const [pageReady, setPageReady] = useState<boolean>(false)

  const checkPageReady = useCallback(async () => {
    setPageReady(false)
    /** 验证token */
    await checkLogin()

    props.onReady && props.onReady()
    dispatch({ type: 'changeStore', payload: true, storeKey: 'isLoginVerified' })
    global.isEnter = true
    setPageReady(true)
  }, [dispatch, props])

  useLayoutEffect(() => {
    if (!global.isEnter) {
      checkPageReady()
    } else {
      setPageReady(true)
    }
  }, [checkPageReady])

  return (
    <>
      <View style={pageReady ? undefined : { display: 'none' }}>{props.children}</View>
      {!pageReady && <View>登录验证中</View>}
    </>
  )
}

export default Page
