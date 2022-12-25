import React, { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './dataListOption.module.scss'

export type OnSelectHandler = () => void

export interface DataLOptionProps {
  onSelect: OnSelectHandler
  children?: ReactNode
}

export const DataListOption: FC<DataLOptionProps> = ({ onSelect, children }) => {
  const onClick: MouseEventHandler<HTMLDivElement> = () => onSelect()

  return (
    <div id="dataListOptiion" className={styles.dataListOption} >
      {children}
    </div>
  )
}