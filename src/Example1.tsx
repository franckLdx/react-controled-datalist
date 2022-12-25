import React, { FC, useState } from "react"
import { DataList } from "./DataList";
import { DataListOption } from "./DataListOption";

import styles from './example1.module.scss'

export const Example1: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | undefined>(undefined)

  return (
    <div>
      <div
        className={styles.example1}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <input style={{ width: "100%" }} placeholder="type something" />
        <DataList className={styles.example1} isOpen={isOpen} >
          <DataListOption onSelect={() => setSelected('Vaux')}>Vaux le vicompte</DataListOption>
          <DataListOption onSelect={() => setSelected('Chambord')}>Chambord</DataListOption>
        </DataList>
      </div>
      <hr />
      {selected ? `Selected: ${selected}` : 'Nothing selected'}
    </div>
  )
}
