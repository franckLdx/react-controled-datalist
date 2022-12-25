import React, { FC, ReactNode } from 'react'

import styles from './dataList.module.scss'

interface DataListProps {
  className?: string
  isOpen: boolean
  children?: ReactNode
}

export const DataList: FC<DataListProps> = ({ className, isOpen, children }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className={`${styles.dataList} ${className}`}>
      {children}
    </div>
  )
}