import React, { FC, ReactNode } from 'react'

interface DataLOptionProps {
  children?: ReactNode
}

export const DataListOption: FC<DataLOptionProps> = ({ children }) => (<option>{children}</option>)