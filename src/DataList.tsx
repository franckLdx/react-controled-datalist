import React, { FC, ReactNode } from 'react'

interface DataListProps {
  isOpen: boolean
  children?: ReactNode
}

export const DataList: FC<DataListProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null
  }
  return <div>{children}</div>
}