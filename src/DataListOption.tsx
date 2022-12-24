import React, { FC, ReactNode } from 'react'

import style from './dataListOption.module.scss'

interface DataLOptionProps {
  children?: ReactNode
}

export const DataListOption: FC<DataLOptionProps> = ({ children }) => (<option
  className={style.dataListOption}>{children}</option>)