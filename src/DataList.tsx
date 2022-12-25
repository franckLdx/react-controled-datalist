import React, { FC, ReactNode } from 'react'

import styles from './dataList.module.scss'

interface DataListProps {
  className?: string
  isOpen: boolean
  children?: ReactNode
}

export const DataList: FC<DataListProps> = ({ className, isOpen, children }) => {
  const foo = () => { debugger }
  if (!isOpen) {
    return null
  }
  return (
    <div id="dataList" className={`${styles.dataList} ${className}`} onClick={foo}>
      {children}
    </div>
  )
}