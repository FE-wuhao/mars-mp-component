/*
 * @Author: 吴灏
 * @Date: 2021-03-23 11:36:05
 * @LastEditors: 吴灏
 * @LastEditTime: 2021-04-29 10:45:31
 * @Description: file content
 */
import { useEffect } from 'react'

function useSafeEffect<T>(cb: (cancel: boolean) => void, depth: T[]) {
  useEffect(() => {
    let isNextRender = false

    cb(!isNextRender)

    return () => {
      isNextRender = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, depth)
}

export default useSafeEffect
